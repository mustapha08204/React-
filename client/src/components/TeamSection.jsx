// import React, { useEffect, useRef } from "react";
// import { Mail, Phone, Linkedin, Github } from "lucide-react";

// const teamMembers = [
//   {
//     id: 1,
//     name: "Sarah Johnson",
//     role: "Lead Developer",
//     field: "Full Stack Development",
//     bio: "Experienced full-stack developer with 8+ years in web technologies and team leadership.",
//     email: "sarah@company.com",
//     phone: "+1 (555) 123-4567",
//     linkedin: "https://linkedin.com/in/sarahjohnson",
//     github: "https://github.com/sarahjohnson",
//     avatar: "/placeholder.svg",
//   },
//   {
//     id: 2,
//     name: "Michael Chen",
//     role: "UI/UX Designer",
//     field: "Design & User Experience",
//     bio: "Creative designer focused on creating intuitive and beautiful user experiences.",
//     email: "michael@company.com",
//     phone: "+1 (555) 234-5678",
//     linkedin: "https://linkedin.com/in/michaelchen",
//     github: "https://github.com/michaelchen",
//     avatar: "/placeholder.svg",
//   },
//   {
//     id: 3,
//     name: "Emily Rodriguez",
//     role: "Project Manager",
//     field: "Project Management",
//     bio: "Organized project manager ensuring smooth delivery and client satisfaction.",
//     email: "emily@company.com",
//     phone: "+1 (555) 345-6789",
//     linkedin: "https://linkedin.com/in/emilyrodriguez",
//     github: "https://github.com/emilyrodriguez",
//     avatar: "/placeholder.svg",
//   },
//   {
//     id: 4,
//     name: "David Kim",
//     role: "Backend Developer",
//     field: "Backend Development",
//     bio: "Backend specialist with expertise in scalable systems and database optimization.",
//     email: "david@company.com",
//     phone: "+1 (555) 456-7890",
//     linkedin: "https://linkedin.com/in/davidkim",
//     github: "https://github.com/davidkim",
//     avatar: "/placeholder.svg",
//   },
//   {
//     id: 5,
//     name: "Lisa Thompson",
//     role: "Marketing Specialist",
//     field: "Digital Marketing",
//     bio: "Digital marketing expert helping brands grow their online presence effectively.",
//     email: "lisa@company.com",
//     phone: "+1 (555) 567-8901",
//     linkedin: "https://linkedin.com/in/lisathompson",
//     github: "https://github.com/lisathompson",
//     avatar: "/placeholder.svg",
//   },
//   {
//     id: 6,
//     name: "James Wilson",
//     role: "DevOps Engineer",
//     field: "Infrastructure & DevOps",
//     bio: "DevOps engineer ensuring reliable deployments and system performance.",
//     email: "james@company.com",
//     phone: "+1 (555) 678-9012",
//     linkedin: "https://linkedin.com/in/jameswilson",
//     github: "https://github.com/jameswilson",
//     avatar: "/placeholder.svg",
//   },
// ];

// export default function TeamSection() {
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.style.opacity = "1";
//             entry.target.style.transform = "translateY(0)";
//           }
//         });
//       },
//       {
//         threshold: 0.1,
//       }
//     );

//     cardsRef.current.forEach((card) => {
//       if (card) observer.observe(card);
//     });

//     return () => {
//       cardsRef.current.forEach((card) => {
//         if (card) observer.unobserve(card);
//       });
//     };
//   }, []);

//   return (
//     <>
//       <style>{`
//         .team-section {
//           padding: 64px 5%;
//           background: linear-gradient(to bottom right, #f8fafc, #ffffff, #f1f5f9);
//         }

//         .team-section .header {
//           text-align: center;
//           margin-bottom: 48px;
//         }

//         .team-section h2 {
//           font-size: 2.5rem;
//           font-weight: bold;
//           background: linear-gradient(to right, #0f172a, #6b21a8, #0f172a);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           margin-bottom: 16px;
//         }

//         .team-section .underline {
//           height: 4px;
//           width: 96px;
//           margin: 0 auto 24px;
//           background: linear-gradient(to right, #9333ea, #ec4899);
//         }

//         .team-section p.description {
//           font-size: 1.125rem;
//           color: #475569;
//           max-width: 640px;
//           margin: 0 auto;
//           line-height: 1.75;
//         }

//         .team-cards-container {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//           gap: 32px;
//         }

//         .team-card {
//           width: 100%;
//           max-width: 450px;
//           background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(248,250,252,0.9));
//           backdrop-filter: blur(4px);
//           border: none;
//           border-top: 4px solid;
//           box-shadow: 0 10px 25px rgba(0,0,0,0.1);
//           transition: all 0.3s ease;
//           border-radius: 12px;
//           opacity: 0;
//           transform: translateY(20px);
//           transition: opacity 0.6s ease-out, transform 0.6s ease-out;
//         }

//         .team-card.visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .team-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 20px 30px rgba(0,0,0,0.15);
//         }

//         /* Apply staggered delays for each card */
//         .team-card:nth-child(1) { transition-delay: 0.1s; }
//         .team-card:nth-child(2) { transition-delay: 0.2s; }
//         .team-card:nth-child(3) { transition-delay: 0.3s; }
//         .team-card:nth-child(4) { transition-delay: 0.4s; }
//         .team-card:nth-child(5) { transition-delay: 0.5s; }
//         .team-card:nth-child(6) { transition-delay: 0.6s; }

//         /* Rest of your existing styles... */
//         .card-content {
//           padding: 32px;
//         }

//         .avatar-container {
//           position: relative;
//         }

//         .avatar {
//           width: 80px;
//           height: 80px;
//           border-radius: 9999px;
//           border: 4px solid white;
//           box-shadow: 0 4px 10px rgba(0,0,0,0.1);
//         }

//         .avatar-status {
//           position: absolute;
//           bottom: -4px;
//           right: -4px;
//           width: 24px;
//           height: 24px;
//           background: linear-gradient(to right, #4ade80, #22c55e);
//           border-radius: 9999px;
//           border: 3px solid white;
//         }

//         .member-name {
//           font-size: 1.25rem;
//           font-weight: bold;
//           margin-bottom: 8px;
//           color: #0f172a;
//           transition: color 0.3s;
//         }

//         .team-card:hover .member-name {
//           color: #7c3aed;
//         }

//         .member-role {
//           font-size: 0.75rem;
//           font-weight: 600;
//           color: #9333ea;
//           text-transform: uppercase;
//           margin-bottom: 8px;
//         }

//         .member-field {
//           display: inline-block;
//           font-size: 0.75rem;
//           margin-bottom: 16px;
//           padding: 4px 12px;
//           border-radius: 12px;
//           background: linear-gradient(to right, #f3e8ff, #fce7f3);
//           color: #7e22ce;
//           border: 1px solid #e9d5ff;
//         }

//         .member-bio {
//           font-size: 0.875rem;
//           color: #475569;
//           line-height: 1.6;
//           margin-bottom: 24px;
//         }

//         .social-links {
//           display: flex;
//           gap: 16px;
//           flex-wrap: wrap;
//         }

//         .social-icon {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 30px;
//           height: 30px;
//           border-radius: 9999px;
//           background: linear-gradient(to right, #f1f5f9, #e2e8f0);
//           color: #475569;
//           transition: all 0.3s ease;
//           box-shadow: 0 2px 4px rgba(0,0,0,0.1);
//         }

//         .social-icon:hover {
//           transform: scale(1.1);
//           color: white;
//         }

//         .social-icon.email:hover {
//           background: linear-gradient(to right, #8b5cf6, #7c3aed);
//         }

//         .social-icon.phone:hover {
//           background: linear-gradient(to right, #22c55e, #16a34a);
//         }

//         .social-icon.linkedin:hover {
//           background: linear-gradient(to right, #3b82f6, #2563eb);
//         }

//         .social-icon.github:hover {
//           background: linear-gradient(to right, #1f2937, #0f172a);
//         }

//         @media (max-width: 768px) {
//           .card-content {
//             padding: 24px;
//           }

//           .team-section h2 {
//             font-size: 2rem;
//           }

//           .team-section p.description {
//             font-size: 1rem;
//           }
//         }
//       `}</style>

//       <section className="team-section">
//         <div className="header">
//           <h2>Meet Our Team</h2>
//           <div className="underline"></div>
//           <p className="description">
//             Our talented professionals are dedicated to delivering exceptional
//             results for your projects.
//           </p>
//         </div>

//         <div className="team-cards-container">
//           {teamMembers.map((member, index) => (
//             <div
//               key={member.id}
//               className="team-card"
//               style={{
//                 borderTopColor: index % 2 === 0 ? "#8b5cf6" : "#ec4899",
//               }}
//               ref={(el) => (cardsRef.current[index] = el)}
//             >
//               <div className="card-content">
//                 <div style={{ display: "flex", gap: "24px" }}>
//                   <div className="avatar-container">
//                     <img
//                       src={member.avatar}
//                       alt={member.name}
//                       className="avatar"
//                     />
//                     <div className="avatar-status"></div>
//                   </div>
//                   <div style={{ flex: 1 }}>
//                     <h3 className="member-name">{member.name}</h3>
//                     <p className="member-role">{member.role}</p>
//                     <span className="member-field">{member.field}</span>
//                     <p className="member-bio">{member.bio}</p>
//                     <div className="social-links">
//                       <a
//                         href={`mailto:${member.email}`}
//                         className="social-icon email"
//                         title="Email"
//                       >
//                         <Mail size={16} />
//                       </a>
//                       <a
//                         href={`tel:${member.phone}`}
//                         className="social-icon phone"
//                         title="Phone"
//                       >
//                         <Phone size={16} />
//                       </a>
//                       <a
//                         href={member.linkedin}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="social-icon linkedin"
//                         title="LinkedIn"
//                       >
//                         <Linkedin size={16} />
//                       </a>
//                       <a
//                         href={member.github}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="social-icon github"
//                         title="GitHub"
//                       >
//                         <Github size={16} />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }
