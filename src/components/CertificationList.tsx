export const CertificationList = ({list}: {list: string[]}) => {
    return (
        <>
            <ul>
                {list.map((certification, index) => (
                    <li key={index}>{certification}</li>
                ))}
            </ul>
        </>
    )
}