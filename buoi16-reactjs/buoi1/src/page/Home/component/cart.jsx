export function Cart() {
    const cards = [{
        "id": 1,
        "name": "Leanne Graham",
        "address": "hihihi ko biết",
        "img": "https://st.quantrimang.com/photos/image/2020/10/17/giai-nen-file-img.jpg"
    },
    {
        "id": 2,
        "name": "Leanne Graham1",
        "address": "hihihi ko biết",
        "img": "https://st.quantrimang.com/photos/image/2020/10/17/giai-nen-file-img.jpg"
    },
    {
        "id": 3,
        "name": "Leanne Graham2",
        "address": "hihihi ko biết",
        "img": "https://st.quantrimang.com/photos/image/2020/10/17/giai-nen-file-img.jpg"
    },
    {
        "id": 4,
        "name": "Leanne Graham3",
        "address": "hihihi ko biết",
        "img": "https://st.quantrimang.com/photos/image/2020/10/17/giai-nen-file-img.jpg"
    },
    {
        "id": 5,
        "name": "Leanne Graham3",
        "address": "hihihi ko biết",
        "img": "https://st.quantrimang.com/photos/image/2020/10/17/giai-nen-file-img.jpg"
    },
    {
        "id": 6,
        "name": "Leanne Graham3",
        "address": "hihihi ko biết",
        "img": "https://st.quantrimang.com/photos/image/2020/10/17/giai-nen-file-img.jpg"
    },
    ]
    return (
        <>  <div className="d-flex flex-wrap m-5 p-5">
            {cards.map((card, index) => (
                <div key={index} className="card w-25 m-5">
                    <img src={card.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{card.name}</h5>
                        <p className="card-text">{card.address}</p>
                        <a href="#" className="btn btn-primary">Go {card.name}</a>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}
