import './DescriptionBox.css'

export const DescriptionBox = () => {
    return (
        <div className="descriptionBox">
            <div className="descriptionBox-navigator">
                <div className="descriptionBox-nav-box">Description</div>
                <div className="descriptionBox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionBox-description">
                <p>E-commerce, or electronic commerce, refers to the buying and selling of goods and services online, typically over the internet. It involves transactions between businesses and consumers, or between businesses, where the payment and delivery of products or services are handled electronically. </p>
                <p>E-commerce relies on the internet for all stages of the transaction, from product browsing and selection to payment processing and delivery. </p>
            </div>
        </div>
    )
}