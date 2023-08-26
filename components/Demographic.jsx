"use client";
import Image from "next/image";
import SignInBtn from "./SignInBtn";
import { useSession } from "next-auth/react";
import styles from "./demographic.module.css";

export default function Demographic() {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return (
      <div className={styles.container}>
        <h2 id="e">Select your Demograpics</h2>
        <br />
        <form action="">
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

              <div className={styles.dropdown}>
                {" "}
                <select name="cars" id="cars" className="dropDown">
                  <option value="volvo">12 - 17</option>
                  <option value="saab">18 - 25</option>
                  <option value="opel">26 - 34</option>
                  <option value="audi">35 -54</option>
                  <option value="audi">55 -</option>
                </select>
              </div>
            </div>
          </div>
          {/*  */}

          <div className={styles.record}>
            <div className={styles.contents}>
              <div className={styles.token}>
                <Image src="/gender-logo.png" height={30} width={30} />
                <div className={styles.explanation}>
                  {" "}
                  <h6 className={styles.select_topic}>Gender</h6>
                  <p>Select Your Gender</p>
                </div>
              </div>

              <div className={styles.dropdown}>
                {" "}
                <select name="cars" id="cars" className="dropDown">
                  <option value="volvo">Male</option>
                  <option value="saab">Female</option>
                 
                </select>
              </div>
            </div>
          </div>
          {/*  */}<div className={styles.record}>
            <div className={styles.contents}>
              <div className={styles.token}>
                <Image src="/location.png" height={30} width={30} />
                <div className={styles.explanation}>
                  {" "}
                  <h6 className={styles.select_topic}>Location</h6>
                  <p>Select Your Current Location</p>
                </div>
              </div>

              <div className={styles.dropdown}>
                {" "}
                <select name="cars" id="cars" className="dropDown">
               
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
                <select name="cars" id="cars" className="dropDown">
                  <option value="volvo">School Student</option>
                  <option value="saab">University Student</option>
                  <option value="opel">Unemployed</option>
                  <option value="audi">Management Occupations</option>
                  <option value="audi">Business And Financial Operations Occupations</option>
                  <option value="audi">Computer and Mathematical Occupations</option>
                  <option value="volvo">Architecture and Engineering Occupations</option>
                  <option value="saab">Life, Physical, and Social Science Occupations</option>
                  <option value="opel">Community and Social Service Occupations</option>
                  <option value="audi">Legal Occupations</option>
                  <option value="audi">Educational Instruction and Library Occupations</option>
                  <option value="audi">Arts, Design, Entertainment, Sports, and Media Occupations</option>
                  <option value="audi">Healthcare Practitioners and Technical Occupations</option>
                  <option value="audi">Healthcare Support Occupations</option>
                  <option value="audi">Protective Service Occupations</option>
                  <option value="audi">Food Preparation and Serving Related Occupations</option>
                  <option value="audi">Building and Grounds Cleaning and Maintenance Occupations</option>
                  <option value="audi">Personal Care and Service Occupations</option>
                  <option value="audi">Sales and Related Occupations</option>
                  <option value="audi">Office and Administrative Support Occupations</option>
                  <option value="audi">Farming, Fishing, and Forestry Occupations</option>
                  <option value="audi">Construction and Extraction Occupations</option>
                  <option value="audi">Installation, Maintenance, and Repair Occupations</option>
                  <option value="audi">Production Occupations</option>
                  <option value="audi">Transportation and Material Moving Occupations</option>
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
                <select name="cars" id="cars" className="dropDown">
                  <option value="volvo">O/L or Below</option>
                  <option value="saab">A/L</option>
                  <option value="opel">Diploma</option>
                  <option value="audi">Degree</option>
                </select>
              </div>
            </div>
          </div>
          {/*  */}
        </form>
      </div>
    );
  } else {
    return <SignInBtn />;
  }
}
