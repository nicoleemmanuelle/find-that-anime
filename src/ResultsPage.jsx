import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

function ResultsPage() {

    const savedImage = 'data:image/png;base64,' + localStorage.getItem('savedImage');
    const location = useLocation();
    const queryParams = queryString.parse(location.search);
    const data = JSON.parse(queryParams.data);

    const resultsCount = data['result'].length;
    const elements = [];

    function convertToPercent(inputString) {
        const percent = (parseFloat(inputString) * 100).toFixed(2);

        return percent;
    }

    function convertSecondsToHHMMSS(seconds) {
        // Step 1: Extract hours, minutes, and seconds
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        // Step 2: Format values to be two digits
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(secs.toFixed(2)).padStart(2, '0'); // padStart with 6 to account for seconds and two decimal places

        // Step 3: Combine and return
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }

    for (let i = 0; i < resultsCount; i++) {
        const result = data['result'][i];
        // console.log(result['anilist']['title']['english']);
        elements.push(
            React.createElement('li', { key: i },
                React.createElement('div', null,
                    React.createElement('div', { className: 'results card shadow' },
                        React.createElement('div', { className: 'ratio ratio-16x9' },
                            React.createElement('iframe', {
                                src: result['video'] + "&size=l",
                                sandbox: '',
                                title: 'Example Iframe'
                            })
                        ),
                        React.createElement('div', { className: 'card-body' },
                            React.createElement('div', null,
                                React.createElement('h2', { className: 'card-title' },
                                    React.createElement('span', {
                                        className: 'badge text-bg-primary rank'
                                    }, i + 1),
                                    React.createElement('a', {
                                        href: "https://myanimelist.net/anime/" + result['anilist']['idMal'],
                                        target: "_blank"
                                    }, result['anilist']['title']['english'] != null ? result['anilist']['title']['english'] : result['anilist']['title']['native']),
                                ),
                            ),
                            React.createElement('p', { className: 'card-text' },
                                React.createElement('strong', null, "Native Title: "), result['anilist']['title']['native']),
                            React.createElement('p', { className: 'card-text' },
                                React.createElement('strong', null, "Similarity: "), convertToPercent(result['similarity']) + "%"),
                            React.createElement('p', { className: 'card-text' },
                                React.createElement('strong', null, "Episode: "), result['episode']),
                            React.createElement('p', { className: 'card-text' },
                                React.createElement('strong', null, "Timestamp: "), convertSecondsToHHMMSS(result['from']) + " - " + convertSecondsToHHMMSS(result['to'])
                            ),

                        )

                    )
                )

            ),
        )
    }

    const list = React.createElement(
        'ol',
        null,
        elements
    );

    return (
        <div id="results-page" className="col-10 row justify-content-center">
            <div className="col search-section-container">
                <div className="search-section">
                    <div className="saved-image-container card bg-primary shadow" >
                        <a id="search-button" className="btn btn-primary" href="/find-that-anime/" role="button"><strong>Search</strong></a>
                    </div>
                    <div className="saved-image-container card bg-primary shadow" >
                        <div className="card-body">
                            <h2 className="card-title text-light">Your Search Image</h2>
                        </div>

                        <div className="ratio ratio-16x9 bg-primary-subtle">
                            <img id="saved-image" className="object-fit-contain" src={savedImage} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <pre>{JSON.stringify(data['result'][0], null, 2)}</pre> */}
            <div className="col">
                <div>
                    <div id="results-section">
                        {list}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultsPage;
