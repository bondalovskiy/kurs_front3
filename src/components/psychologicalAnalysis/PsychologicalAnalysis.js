import React, { useState } from 'react';
import './PsychologicalAnalysis.css';
import { getConfiguration } from '../../config';

// Simple markdown parser function
const parseMarkdown = (markdown) => {
    if (!markdown) return '';
    
    // Replace headers
    let html = markdown
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>');
    
    // Replace bold and italic
    html = html
        .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/gim, '<em>$1</em>')
        .replace(/\_\_(.*?)\_\_/gim, '<strong>$1</strong>')
        .replace(/\_(.*?)\_/gim, '<em>$1</em>');
    
    // Replace line breaks
    html = html.replace(/\n/gim, '<br />');
    
    // Replace lists
    html = html
        .replace(/^\s*\*\s(.*$)/gim, '<li>$1</li>')
        .replace(/^\s*\-\s(.*$)/gim, '<li>$1</li>');
    
    // Replace links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    
    return html;
};

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
                // If it's not JSON, just display the text as markdown
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
                    <div 
                        className="analysis-content"
                        dangerouslySetInnerHTML={{ __html: parseMarkdown(analysis) }}
                    />
                </div>
            )}
        </div>
    );
}

export default PsychologicalAnalysis; 