import React from 'react';
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ExperienceList } from "../Helpers/ExperienceDetails";
import ExperienceDisplay from './ExperienceDisplay';
// n




function Experience(){
  return(
        <div className="contact">
         <VerticalTimeline lineColor="#3e497a">
        { ExperienceList.map((list,index)=>{
              return(

                <ExperienceDisplay 
                key={index}
                  id={index}
                  date={list.date}
                  type={list.type}
                  school_company={list.school_company}
                  degree_position={list.degree_position}
                  work={list.work_on}
                  />


            //   <VerticalTimelineElement
            //         key={index}
            //        className="vertical-timeline-element--education"
            //        contentStyle={{ background: "rgb(247, 241, 240)", color: '#000',border:"3px" }}
            //         date={list.date}
            //         iconStyle={list.type==='education' ?{ background: "#3e497a", color: "#fff" }:{ background: "#e9d35b", color: "#fff" }}
            //         icon={list.type==='education' ?<SchoolIcon /> : <WorkIcon />}
            //    >
            //    <h3 className="vertical-timeline-element-title">
            //  {list.school_company}
            //    </h3>
            //    <h4 className="vertical-timeline-element-subtitle">
            //     {list.degree_position}
            //         </h4> 
            //    <p>{list.work_on}</p>
            //    </VerticalTimelineElement>

              )

              }) }
         </VerticalTimeline> 
        </div> 
  )
}



// function Experience() {
//   return (
//     <div className="contact">
//       <VerticalTimeline lineColor="#3e497a">
//         <BasicModal >
//         <VerticalTimelineElement
//           className="vertical-timeline-element--education"
//           date="2015"
//           iconStyle={{ background: "#3e497a", color: "#fff" }}
//           icon={<SchoolIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">
//             Sant Tukaram Madhyamik Vidhyalay, Pune , Maharashtra 
//           </h3>

//           <p>SSC</p>
//         </VerticalTimelineElement>
//         </BasicModal>
//        <VerticalTimelineElement
//           className="vertical-timeline-element--education"
//           date="2015 - 2017"
//           iconStyle={{ background: "#3e497a", color: "#fff" }}
//           icon={<SchoolIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">
//            MES Abasaheb Garware College, Pune, Maharashtra
//           </h3>

//           <h4 className="vertical-timeline-element-subtitle">
//            HSC
//           </h4>

//           <p> Science</p>
//         </VerticalTimelineElement>

//         <VerticalTimelineElement
//           className="vertical-timeline-element--education"
//           date="2017 - 2020"
//           iconStyle={{ background: "#3e497a", color: "#fff" }}
//           icon={<SchoolIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">
//            MES Abasaheb Garware College, Pune, Maharashtra
//           </h3>

//           <h4 className="vertical-timeline-element-subtitle">
//             Bachelor's Degree
//           </h4>

//           <p> Computer Science</p>
//         </VerticalTimelineElement>
//         <VerticalTimelineElement
//           className="vertical-timeline-element--work"
//           date="2020 - 2022"
//           iconStyle={{ background: "#3e497a", color: "#fff" }}
//           icon={<SchoolIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">
//           MES Abasaheb Garware College, Pune, Maharashtra
//           </h3>
//           <h4 className="vertical-timeline-element-subtitle">
//             M.Sc
//           </h4>
//           <p>Computer Science</p>
//         </VerticalTimelineElement>

//         <VerticalTimelineElement
//           className="vertical-timeline-element--work"
//           date="October 2021 - December 2021"
//           iconStyle={{ background: "#e9d35b", color: "#fff" }}
//           icon={<WorkIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">
//            Intern at FDS Infotech Ltd.
//           </h3>
//           <h4 className="vertical-timeline-element-subtitle">
//            Pune , Maharashtra
//           </h4>
//           <p>
//            Work on .Net Framework
//           </p>
//         </VerticalTimelineElement>
//         <VerticalTimelineElement
//           className="vertical-timeline-element--work"
//           date="December 2021 - Present"
//           iconStyle={{ background: "#e9d35b", color: "#fff" }}
//           icon={<WorkIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">
//            Apprentice- Software Engineer at 3Pillar Global
//           </h3>
//           <h4 className="vertical-timeline-element-subtitle">
//            Noida , India
//           </h4>
//           <p>
//           Working on front end technbologies like ReactJS , HTML , CSS , TypeScript
//           </p>
//         </VerticalTimelineElement>
//       </VerticalTimeline>
//     </div>
//   );
// }

export default Experience