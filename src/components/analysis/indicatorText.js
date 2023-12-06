function IndicatorText({indicator}) {
    return (
        <>
            {
                (() => {
                    if (indicator === 'acousticness') {
                        return (<p>
                             Represents the likelihood of your tracks being acoustic. 
                             A lower value indicates a higher presence of electronic or synthesized sounds.
                        </p>)
                    } else if (indicator === 'energy') {
                        return (<p>
                            Measures the intensity and activity level of your tracks. 
                            Higher values indicate more energetic and lively music.
                        </p>)
                    } else if (indicator === 'danceability') {
                        return (<p>
                            A higher danceability score indicates that the music in your library has
                             a strong rhythmic foundation and catchy beats.
                        </p>)
                    } else if (indicator === 'instrumentalness') {
                        return (<p>
                             Indicates the likelihood of your tracks being instrumental without vocals. 
                             A higher value suggests a higher probability of instrumental tracks.
                        </p>)
                    } else if (indicator === 'liveness') {
                        return (<p>
                            Reflects the presence of a live audience or live performance elements in your tracks. 
                            Higher values indicate a higher chance of live recordings.
                        </p>)
                    } else if (indicator === 'loudness') {
                        return (<p>
                            Represents the overall volume level of your tracks.
                            Negative values indicate quieter tracks, while positive values represent louder ones.
                        </p>)
                    } else if (indicator === 'speechiness') {
                        return (<p>
                            Indicates the presence of spoken words or vocals in your tracks. 
                            Higher values suggest a higher proportion of spoken words.
                        </p>)
                    } else if (indicator === 'tempo') {
                        return (<p>
                            Represents average the beats per minute (BPM) of your tracks, 
                            indicating the speed or tempo of the music.
                        </p>)
                    } else if (indicator === 'valence') {
                        return (<p>
                            Reflects the musical positiveness or happiness of your tracks. 
                            Higher values indicate more positive or happier tracks.
                        </p>)
                    } else if (indicator === 'mainstream') {
                        return (<p>
                            Mainstream score indicates how closely your music aligns with mainstream trends. 
                            This score helps you understand the popularity or mainstream appeal of your music collection.
                        </p>)
                    } else if (indicator === 'boringness') {
                        return (<p>
                            This indicator offers insights into the diversity and uniqueness of your tracks, 
                            allowing you to assess the breadth of your musical choices.
                        </p>)
                    }
                })()
            }
        </>
    );
}

export default IndicatorText;