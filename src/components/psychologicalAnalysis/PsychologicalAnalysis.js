import React, { useState } from 'react';
import './PsychologicalAnalysis.css';
import { getConfiguration } from '../../config';

function PsychologicalAnalysis() {
    const [loading, setLoading] = useState(false);
    const [analysis, setAnalysis] = useState('');
    const [error, setError] = useState('');
    
    const { apiUrl } = getConfiguration();

    const generateAnalysis = async () => {
        setLoading(true);
        setError('');
        setAnalysis('');
        
        try {
            console.log('Making request to:', `${apiUrl}/stats/profile/me/generate`);
            console.log('JWT token exists:', !!sessionStorage.getItem('jwt'));
            
            const response = await fetch(`${apiUrl}/stats/profile/me/generate`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + sessionStorage.getItem('jwt')
                }
            });
            
            console.log('Response status:', response.status);
            
            // Get the response text first to check what we're getting
            const responseText = await response.text();
            console.log('Response text:', responseText);
            
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${responseText}`);
            }
            
            // Try to parse the text as JSON
            let data;
            try {
                data = responseText ? JSON.parse(responseText) : {};
                console.log('Parsed data:', data);
            } catch (parseError) {
                console.error('Failed to parse response as JSON:', parseError);
                // If it's not JSON, just display the text
                setAnalysis(responseText);
                return;
            }
            
            // Display the appropriate content
            if (data && (data.analysis || data.result || data.data || data.message)) {
                setAnalysis(data.analysis || data.result || data.data || data.message);
            } else {
                // If none of the expected fields exist, just stringify the whole response
                setAnalysis(JSON.stringify(data, null, 2));
            }
        } catch (err) {
            console.error('Failed to generate analysis:', err);
            setError(`Failed to generate psychological analysis: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="psychological-analysis-container">
            <h1>Psychological Analysis</h1>
            <p className="description">Generate a psychological profile based on your music listening habits.</p>
            
            <button 
                className="generate-button" 
                onClick={generateAnalysis}
                disabled={loading}
            >
                {loading ? 'Generating...' : 'Generate Analysis'}
            </button>
            
            {error && <p className="error-message">{error}</p>}
            
            {analysis && (
                <div className="results-container">
                    <h2>Analysis Results</h2>
                    <div className="analysis-content">
                        {analysis}
                    </div>
                </div>
            )}
        </div>
    );
}

export default PsychologicalAnalysis; 