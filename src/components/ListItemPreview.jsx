import React from 'react'

const ListItemPreview = ({callDetails}) => {
    return (
        <>
            {callDetails && <section className='call-preview flex'>
                {Object.keys(callDetails).slice(1).map(callDetail => 
                <div className='call-item' key={callDetail}> {callDetail} : {callDetails[callDetail]} </div>
                    ) }
            </section>}
        </>
    )
}

export default ListItemPreview