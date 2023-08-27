"use client";
import Link from "next/link";
import Image from "next/image";
import SignInBtn from "./SignInBtn";
import { useSession } from "next-auth/react";
import styles from "./demographic.module.css";
import {useState} from 'react'
import {useRouter} from "next/navigation"

export default function Demographic() {
  const { status, data: session } = useSession();

  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");

  const router = useRouter();



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!age || !location) {
      alert("agee and location are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/addSearch", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ age, location }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a serach");
      }
    } catch (error) {
      console.log(error);
    }
  };




console.log('Hi');
  if (status === "authenticated") {
    return (
      <div className={styles.container}>
        <button>
          <Link className="bg-red p-2" href={"/more"}>
            More Familiar Recommendation
          </Link>
        </button>

        <h2 id="e">Select your Demograpics</h2>
        <br />
        <form    onSubmit={handleSubmit}>
          {/*  */}
          <div className={styles.record}>
            <div className={styles.contents}>
              <div className={styles.token}>
                <Image src="/age.png" height={30} width={30} />
                <div className={styles.explanation}>
                  {" "}
                  <h6 className={styles.select_topic}>Age</h6>
                  <p>Tell us about your Age Group</p>
                </div>
              </div>

              <div className={styles.reco}>
                {" "}
                <select name="cars" id="cars" className={styles.dropDown}  onChange={(e) => setAge(e.target.value)}
        value={age} >
                <option value="" disabled selected>Select your option</option>
                  <option value="12">12 - 17</option>
                  <option value="18">18 - 25</option>
                  <option value="26">26 - 34</option>
                  <option value="35">35 -54</option>
                  <option value="55">55 -</option>
                </select>
              </div>
            </div>
          </div>
          {/*  */}

          <div className={styles.record}>
            <div className={styles.contents}>
              <div className={styles.token}>
                <Image src="/G.png" height={30} width={30} />
                <div className={styles.explanation}>
                  {" "}
                  <h6 className={styles.select_topic}>Gender</h6>
                  <p>Select Your Gender</p>
                </div>
              </div>

              <div className={styles.dropdown}>
                {" "}
                <select name="cars" id="cars" className={styles.dropDown}>
                <option value="" disabled selected>Select your option</option>
                  <option value="volvo">Male</option>
                  <option value="saab">Female</option>
                </select>
              </div>
            </div>
          </div>
          {/*  */}
          <div className={styles.record}>
            <div className={styles.contents}>
              <div className={styles.token}>
                <Image src="/L.jpg" height={30} width={30} />
                <div className={styles.explanation}>
                  {" "}
                  <h6 className={styles.select_topic}>Location</h6>
                  <p>Select Your Current Location</p>
                </div>
              </div>

              <div className={styles.dropdown}>
                {" "}
                <select className={styles.dropDown}    onChange={(e) => setLocation(e.target.value)}
        value={location}>
                <option value="" disabled selected>Select your option</option>
                  <option value="volvo">Ampara</option>
                  <option value="saab">Anuradapura</option>
                  <option value="opel">Badulla</option>
                  <option value="audi">Batticaloa</option>
                  <option value="volvo">Colombo</option>
                  <option value="saab">Galle</option>
                  <option value="opel">Gampaha</option>
                  <option value="audi">Hambantota</option>
                  <option value="volvo">Jaffna</option>
                  <option value="saab">Kalutara</option>
                  <option value="opel">Kandy</option>
                  <option value="audi">Kegalle</option>
                  <option value="volvo">Kilinochchi</option>
                  <option value="saab">Kurunegala</option>
                  <option value="opel">Mannar</option>
                  <option value="audi">Matale</option>
                  <option value="audi">Matara</option>
                  <option value="volvo">Moneragala</option>
                  <option value="saab">Mullaitivu</option>
                  <option value="opel">Nuwara Eliya</option>
                  <option value="audi">Pollonnaruwa</option>
                  <option value="volvo">Puttalam</option>
                  <option value="saab">Trincomalee</option>
                  <option value="opel">Vavunia</option>
                </select>
              </div>
            </div>
          </div>
          {/*  */}
          <div className={styles.record}>
            <div className={styles.contents}>
              <div className={styles.token}>
                <Image src="/occupation" height={30} width={30} />
                <div className={styles.explanation}>
                  {" "}
                  <h6 className={styles.select_topic}>Occupation</h6>
                  <p>Select Your Occupation</p>
                </div>
              </div>

              <div className={styles.dropdown}>
                {" "}
                <select name="cars" id="cars" className={styles.dropDown}>
                <option value="" disabled selected>Select your option</option>
                  <option value="volvo">School Student</option>
                  <option value="saab">University Student</option>
                  <option value="opel">Unemployed</option>
                  <option value="audi">Management Occupations</option>
                  <option value="audi">
                    Business And Financial Operations Occupations
                  </option>
                  <option value="audi">
                    Computer and Mathematical Occupations
                  </option>
                  <option value="volvo">
                    Architecture and Engineering Occupations
                  </option>
                  <option value="saab">
                    Life, Physical, and Social Science Occupations
                  </option>
                  <option value="opel">
                    Community and Social Service Occupations
                  </option>
                  <option value="audi">Legal Occupations</option>
                  <option value="audi">
                    Educational Instruction and Library Occupations
                  </option>
                  <option value="audi">
                    Arts, Design, Entertainment, Sports, and Media Occupations
                  </option>
                  <option value="audi">
                    Healthcare Practitioners and Technical Occupations
                  </option>
                  <option value="audi">Healthcare Support Occupations</option>
                  <option value="audi">Protective Service Occupations</option>
                  <option value="audi">
                    Food Preparation and Serving Related Occupations
                  </option>
                  <option value="audi">
                    Building and Grounds Cleaning and Maintenance Occupations
                  </option>
                  <option value="audi">
                    Personal Care and Service Occupations
                  </option>
                  <option value="audi">Sales and Related Occupations</option>
                  <option value="audi">
                    Office and Administrative Support Occupations
                  </option>
                  <option value="audi">
                    Farming, Fishing, and Forestry Occupations
                  </option>
                  <option value="audi">
                    Construction and Extraction Occupations
                  </option>
                  <option value="audi">
                    Installation, Maintenance, and Repair Occupations
                  </option>
                  <option value="audi">Production Occupations</option>
                  <option value="audi">
                    Transportation and Material Moving Occupations
                  </option>
                  <option value="audi">Other</option>
                </select>
              </div>
            </div>
          </div>
          {/*  */}
          <div className={styles.record}>
            <div className={styles.contents}>
              <div className={styles.token}>
                <Image src="/education.png" height={30} width={30} />
                <div className={styles.explanation}>
                  {" "}
                  <h6 className={styles.select_topic}>Education Level</h6>
                  <p>Select Your Education Level</p>
                </div>
              </div>

              <div className={styles.dropdown}>
                {" "}
                <select name="cars" id="cars" className={styles.dropDown}>
                <option value="" disabled selected>Select your option</option>
                  <option value="volvo">O/L or Below</option>
                  <option value="saab">A/L</option>
                  <option value="opel">Diploma</option>
                  <option value="audi">Degree</option>
                </select>
              </div>
            </div>
          </div>
          {/*  */}
          <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
       Submit
      </button>
          <br />
        </form>
      </div>
    );
  } else {
    return <SignInBtn />;
  }
}
