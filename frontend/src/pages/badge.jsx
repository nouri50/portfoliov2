import React, { useState } from 'react';
import './Badge.css'; // Importez votre fichier CSS pour les styles du badge

const Badge = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`badge-container ${isHovered ? 'hovered' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="badge-base LI-profile-badge" data-locale="fr_FR" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="nouri-morouche-9a8237140" data-version="v1">
                <a className="badge-base__link LI-simple-link" href="https://fr.linkedin.com/in/nouri-morouche-9a8237140?trk=profile-badge">Nouri M.</a>
            </div>
        </div>
    );
}

export default Badge;
