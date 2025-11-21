const teamMembers = [
  {
    name: "Antony",
    role: "CEO",
    image: "/team/antony.png",
    linkedin: "https://www.linkedin.com/in/antony-m-080640179?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACpGXGABmN5k6FvzBKT3OaBGaRzirquYhtk&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BXE6KsRidRRSCqm2toE5Dwg%3D%3D",
  },
  {
    name: "Alexandros",
    role: "Tech Lead",
    image: "/team/alexandros.jpeg",
    linkedin: "https://www.linkedin.com/in/alexandros-lekkas/",
  },
  {
    name: "Ashwin",
    role: "Developer",
    image: null,
    linkedin: "https://www.linkedin.com/in/ashwin-balaraman-512990329/",
  },
  {
    name: "Dominic",
    role: "Growth",
    image: null,
    linkedin: null,
  },
];

export function Team() {
  return (
    <section className="px-4 pt-40 pb-24">
      <div className="mx-auto w-full max-w-4xl">
        <div className="flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
              Meet the Founders
            </h2>
          </div>

          {/* Team Grid */}
          <div className="grid gap-8 grid-cols-2 md:grid-cols-4">
            {teamMembers.map((member) => {
              const CardContent = (
                <>
                  {/* Avatar */}
                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-muted border-2 border-border transition-transform hover:scale-105">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex w-full h-full items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                        <span className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                          {member.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Name and Role */}
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </>
              );

              if (member.linkedin) {
                return (
                  <a
                    key={member.name}
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-4 items-center text-center transition-all hover:opacity-80 cursor-pointer group"
                  >
                    {CardContent}
                  </a>
                );
              }

              return (
                <div
                  key={member.name}
                  className="flex flex-col gap-4 items-center text-center"
                >
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

