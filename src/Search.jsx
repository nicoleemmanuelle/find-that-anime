import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
    const [image, setImage] = useState(null);
    const navigate = useNavigate(); // Get the history object

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        document.getElementById("loading-button").style.display = "inline";
        document.getElementById("submit-button").style.display = "none";

        const formData = new FormData();
        formData.append('image', image);

        // Save imageInput to localStorage
        const fileInput = document.getElementById('imageInput');
        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const base64String = event.target.result.split(',')[1]; // Get Base64 string
                localStorage.setItem('savedImage', base64String); // Save to sessionStorage
            };
            reader.readAsDataURL(file); // Convert the image to a Base64 string
        } else {
            console.error('No file selected');
        }

        // Get data
        try {
            const response = await fetch('https://api.trace.moe/search?anilistInfo', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();

            // Redirect to another page, for example to a 'results' page
            // navigateTo("/results");
            const result = data['result'];
            const slicedResult = result.slice(0, 1);
            sessionStorage.setItem('resultsData', JSON.stringify(data));
            navigate('/results', { state: { data } });
            // navigateTo(`/results?data=${encodeURIComponent(JSON.stringify(slicedResult))}`);

        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div id="search-page" className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="search-container mx-auto border rounded bg-primary-subtle">
                <img src="find-that-anime-logo.png"></img>
                <h1 className="text-light">Upload a screenshot of the anime you want to find</h1>
                <form onSubmit={handleSubmit} id="image-form">
                    <div className="input-group">
                        <input id="imageInput" className="form-control" type="file" name="image" accept="image/*" required onChange={handleImageChange} />
                        <input id="submit-button" className="btn btn-primary focus-ring text-decoration-none border rounded-end bg-purple" type="submit" />
                        <button id="loading-button" className="btn btn-primary" type="button" disabled="">
                            <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                            <span role="status">Loading...</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Search;
