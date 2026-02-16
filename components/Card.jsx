import React from "react";

const Card = React.memo(({ p }) => {

    console.log(p.name);

    return (
        <div key={p.id} className="col d-flex">
            <div className="card my-5 flex-fill rounded-4">
                <img src={p.image} className="rounded-4 rounded-bottom-0" />
                <div className="card-body">
                    <p>
                        <strong>Name:</strong> <span>{p.name}</span>
                    </p>
                    <p>
                        <strong>Position:</strong> <span>{p.position}</span>
                    </p>
                    <p>
                        <strong>Biography:</strong> <span>{p.biography}</span>
                    </p>
                </div>
            </div>
        </div>
    )
})
export default Card