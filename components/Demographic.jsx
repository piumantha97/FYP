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
  const [occupation, setOccupation] = useState("");
  const [gender, setGender] = useState("");
  const [education, setEducation] = useState("");

  const router = useRouter();



  const handleSubmit = async (e) => {
   

    if (!age || !gender || !location || !education || !occupation) {
      alert("every field is  required.");
      return;
    }
  

    try {
      const res = await fetch("http://localhost:3000/api/addSearch", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ age,gender, location,occupation,education }),
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
        <button className={styles.btnMore}>
          <Link className="bg-red p-2" href={"/more"}>
            More Familiar Recommendation
          </Link>
        </button>

        <h2 className={styles.tt}>Select your Demograpics</h2>
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

              <div className={styles.rec}>
                {" "}
                <select name="cars" id="cars" className={styles.dropDown}  onChange={(e) => setAge(e.target.value)} value={age} >
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
                <select name="cars" id="cars" className={styles.dropDown}  onChange={(e) => setGender(e.target.value)}
        value={gender} >
                <option value="" disabled selected>Select your option</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
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
                  <option value="1">Ampara</option>
                  <option value="2">Anuradapura</option>
                  <option value="3">Badulla</option>
                  <option value="4">Batticaloa</option>
                  <option value="5">Colombo</option>
                  <option value="6">Galle</option>
                  <option value="7">Gampaha</option>
                  <option value="8">Hambantota</option>
                  <option value="9">Jaffna</option>
                  <option value="10">Kalutara</option>
                  <option value="11">Kandy</option>
                  <option value="12">Kegalle</option>
                  <option value="13">Kilinochchi</option>
                  <option value="14">Kurunegala</option>
                  <option value="15">Mannar</option>
                  <option value="16">Matale</option>
                  <option value="17">Matara</option>
                  <option value="18">Moneragala</option>
                  <option value="19">Mullaitivu</option>
                  <option value="20">Nuwara Eliya</option>
                  <option value="21">Pollonnaruwa</option>
                  <option value="22">Puttalam</option>
                  <option value="23">Trincomalee</option>
                  <option value="24">Vavunia</option>
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
                <select name="cars" id="cars" className={styles.dropDown}  onChange={(e) => setOccupation(e.target.value)}
        value={occupation} >
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
                <select name="cars" id="cars" className={styles.dropDown}  onChange={(e) => setEducation(e.target.value)}
        value={education} >
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
          <button className={styles.submit}
        type="submit"
        
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
