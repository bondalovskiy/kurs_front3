import React, { useState } from 'react';
import './PsychologicalAnalysis.css';

function PsychologicalAnalysis() {
    const [loading, setLoading] = useState(false);
    const [analysis, setAnalysis] = useState('');

    const generateAnalysis = () => {
        setLoading(true);
        // Simulate API call with setTimeout
        setTimeout(() => {
            setAnalysis('This user shows a preference for energetic music with positive emotional valence. The listening patterns suggest an extroverted personality type with openness to new experiences. There is a correlation between music choices and mood regulation strategies, indicating effective emotional management through music.');
            setLoading(false);
        }, 2000);
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