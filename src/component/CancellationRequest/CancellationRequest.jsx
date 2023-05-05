import React from 'react';

const CancellationRequest = () => {
    const requests = [{
        title: "Warsáw, Poland",
        date: "April 15, 2023",
        url: "https://www.google.com/"
    },
    {
        title: "Giza, Egypt",
        date: "July 19, 2023",
        url: "https://www.google.com/"
    },
    {
        title: "Venice, Italy",
        date: "May 24, 2023",
        url: "https://www.google.com/"
    }
    ]

    return (
        <div className='w-full h-full bg-white p-2 flex flex-col gap-5'>
            {
                requests.map((item, index) => {
                    return (
                        <p className='mx-5 p-3 rounded-lg bg-[#F5F9FF]'>Booking for {item.title} on {item.date} has been cancelled of {item.url}</p>
                    )
                })
            }
        </div>
    );
}

export default CancellationRequest;
