export default function Education() {
  const educationData = [
    {
      title: "Ordinary Level ",
      year: "(2007 - 2017)",
      institution: "G/Gintota Central College",
      location: "Gintota, Sri Lanka",
      status: STATUS.COMPLETED,
    },
    {
      title: "Advanced Level",
      year: "(2018 - 2020)",
      institution: "D.R. Richarch Pathirana College, Galle",
      location: "Uluwitike, Galle, Sri Lanka",
      status: STATUS.FAILED,
    },
    {
      title: "Software Engineering (HND)",
      year: "(2020 - 2022)",
      institution: "IJSE Institute (Institute of Software Engineering)",
      location: "Galle, Sri Lanka",
      status: STATUS.COMPLETED,
    },
    {
      title: "Computer Science (BSc)",
      year: "(2026 - ...)",
      institution: "Pending",
      location: null,
      status: STATUS.PENDING,
    },
  ];

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 mt-20">
      <div className="mb-10">
        <div className="border-t-2 border-white w-20 mb-2"></div>
        <h1 className="font-semibold text-white text-3xl md:text-4xl">
          Education
        </h1>
        <p className="text-white/60 mt-2 max-w-xl">
          My educational background and qualifications.
        </p>
      </div>
      <section className="flex gap-4 flex-row">
        {/* <section className="rounded-md bg-white/10 p-6">
                    <h2 className="font-semibold text-white text-xl md:text-2xl">
                        Ordinary Level (2007 - 2013)
                    </h2>
                    <p className="text-white/70 mt-2">
                        G/Gintota Central College
                    </p>
                </section>

                <section className="rounded-md bg-white/10 p-6">
                    <h2 className="font-semibold text-white text-xl md:text-2xl">
                        Advanced Level (2013 - 2015)
                    </h2>
                    <p className="text-white/70 mt-2">
                        D.R. Richarch Pathirana College, Galle
                    </p>
                </section>
                <section className="rounded-md bg-white/10 p-6">
                    <h2 className="font-semibold text-white text-xl md:text-2xl">
                        Higher National Diploma (2020 - 2022)
                    </h2>
                    <p className="text-white/70 mt-2">
                        IJSE Institute (Institute of Software Engineering), Galle
                    </p>
                </section>
                <section className="rounded-md bg-white/10 p-6">
                    <h2 className="font-semibold text-white text-xl md:text-2xl">
                        Bachelor of Science in Software Engineering
                    </h2>
                    <p className="text-white/70 mt-2">
                        Pending
                    </p>
                </section> */}
        {educationData.map((education, index) => (
          <EducationCard
            key={index}
            title={education.title}
            institution={education.institution}
            status={education.status}
            year={education.year}
            location={education.location}
          />
        ))}{" "}
      </section>
    </section>
  );
}

const STATUS = {
  PENDING: "bg-amber-200/20",
  COMPLETED: "bg-green-400/5",
  FAILED: "bg-red-500/20",
};

import Image from "next/image";
import School from "@/public/icon/education/icon-school.png";
import Location from "@/public/icon/education/icon-location.png";
import Calendar from "@/public/icon/education/icon-calendar.png";
import SchoolIcon from "@/public/icon/education/icon-school-buildng.png";

function EducationCard({
  title,
  institution,
  status,
  year,
  location,
}: {
  title: string;
  institution: string;
  status: (typeof STATUS)[keyof typeof STATUS];
  year: string;
  location: string | null;
}) {
  console.log(status);
  return (
    <section
      className={`rounded-md ${status} p-6 w-[400px] h-[230px] relative ml-4 border border-white/10`}
    >
      <div className="w-[40px] h-[40px] bg-[#1a1a1a] rounded-md absolute top-[-15px] left-[-15px] flex justify-center items-center border border-green-400">
        <Image src={School} alt="School" width={20} height={20} />
      </div>
      <h2 className="font-semibold text-white text-xl md:text-2xl">{title} </h2>
      <section className="flex flex-col gap-3 p-2 border-l border-dashed border-white/50">
        <p className="text-white/70 mt-2 flex items-center gap-2">
            <Image src={SchoolIcon} alt="School" width={20} height={20} />{" "}
            {institution}{" "}
        </p>
        <span className="text-white/50 flex items-center gap-2">
            <Image src={Calendar} alt="Calendar" width={20} height={20} />
            {year}
        </span>
        {location && (
            <span className="text-white/50 flex items-center gap-2">
            <Image src={Location} alt="School" width={25} height={25} />{" "}
            {location}{" "}
            </span>
        )}{" "}
      </section>
    </section>
  );
}
