const SkillCard = ( {src, label} ) => {
    return (
        <div className="item">
            <img src={src} alt="Image" />
            <h5>{label}</h5>
        </div>
    )
}

export default SkillCard;