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
        
        try {
            const response = await fetch(`${apiUrl}/stats/profile/me/generate`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + sessionStorage.getItem('jwt')
                }
            });
            
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            
            const data = await response.json();
            setAnalysis(data.analysis || JSON.stringify(data, null, 2));
        } catch (err) {
            console.error('Failed to generate analysis:', err);
            setError('Failed to generate psychological analysis. Please try again later.');
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