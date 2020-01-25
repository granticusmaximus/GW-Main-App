import React from "react";

const timelineData = [
    {
        text: 'Department of Commerce',
        date: 'May 2019 - Present',
        info: 'Full Stack Developer on contract for the Department of Commerce. I worked with C#, ASP.NET, ReactJS and Java',
        category: {
			tag: 'job',
			color: '#018f69'
		}
    },
    {
        text: 'Zenith Advanced Solutions',
        date: 'Sept 2018 - April 2019',
        info: 'Full Stack Developer on contract for the DoD. I worked with C# and ASP.NET',
        category: {
			tag: 'job',
			color: '#018f69'
		}
    },
    {
        text: 'Aset Partners',
        date: 'July 2018 - Sept 2018',
        info: 'Full Stack Developer on contract for the DoD. I worked with C#, ASP.NET, and ReactJS',
        category: {
			tag: 'job',
			color: '#018f69'
		}
    },
    {
        text: 'Graduated with Bachelors in Information Technology',
        date: 'May 2018',
        category: {
			tag: 'college',
			color: '#1DA1F2'
		}
    },
    {
        text: 'VOR Technology',
        date: 'Nov 2017 - July 2018',
        info: 'Full Stack Developer on contract for the DoD. I worked with C#, ASP.NET, and ReactJS',
        category: {
			tag: 'job',
			color: '#018f69'
		}
    },
    {
        text: 'Wayne Reaves Software',
        date: 'July 2013 – June 2015',
        info: 'Frontend Web Developer and Call Center Trainer',
        category: {
			tag: 'job',
			color: '#018f69'
		}
    }
]

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p>{data.text}</p>
            <p>{data.info}</p>
            {data.link && (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )}
            <span className="circle" />
        </div>
    </div>
);

const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );


export default Timeline;