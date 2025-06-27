import React, { useEffect, useState, useRef } from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function TeamSection() {
  const [teamMembers, setTeamMembers] = useState([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    async function fetchMembers() {
      try {
        const res = await fetch("/api/team-get");
        if (!res.ok) throw new Error("Failed to load team members");
        const data = await res.json();
        setTeamMembers(data);
      } catch {
        setTeamMembers([]); // or show fallback
      }
    }
    fetchMembers();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [teamMembers]);

  return (
    <>
      <style>{`
        .team-member {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s ease-out;
          background-color: #18181b;
          border-radius: 10px;
          padding: 1rem 1.5rem;
          box-shadow: 0 2px 10px rgb(0 0 0 / 0.5);
          width: 280px;
          margin: 0.5rem;
        }
        .team-member:hover {
          background: linear-gradient(to right, #6c63ff, #ff6584);
          box-shadow: 0 5px 10px rgb(255 101 132 / 0.5);
        }
        .team-member img {
          border-radius: 50%;
          max-width: 80px;
          margin-bottom: 1rem;
        }
        .team-member h3 {
          margin: 0.25rem 0 0.5rem;
          color: #fff;
        }
        .team-member p {
          color: #ccc;
          font-size: 0.85rem;
        }
        .social-icons a {
          color: #fff;
          margin-right: 0.5rem;
          font-size: 1.2rem;
          transition: color 0.3s ease;
        }
        .social-icons a:hover {
          color: #ff6584;
        }
      `}</style>

      <section
        id="team"
        className="section"
        style={{
          padding: "6rem 2rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        {teamMembers.map((member, i) => (
          <div
            key={member.id}
            className="team-member"
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <img
              src={
                member.avatar ||
                "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
              }
              alt={member.name}
            />
            <h3>{member.name}</h3>
            <p>
              {member.role} - {member.field}
            </p>
            <p>{member.bio}</p>
            <div className="social-icons">
              {member.email && (
                <a href={`mailto:${member.email}`} title="Email">
                  <Mail size={18} />
                </a>
              )}
              {member.phone && (
                <a href={`tel:${member.phone}`} title="Phone">
                  <Phone size={18} />
                </a>
              )}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              )}
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                >
                  <Github size={18} />
                </a>
              )}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
