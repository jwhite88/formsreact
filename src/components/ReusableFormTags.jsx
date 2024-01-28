import { useState } from 'react'
import Text from "../elements/Text";
import Email from "../elements/Email";
import Password from "../elements/Password";
import Checkbox from "../elements/Checkbox";
import CheckboxMultiple from "../elements/CheckboxMultiple";
import Radio from "../elements/Radio";
import Option from "../elements/Option";
import OptionsMultiple from "../elements/OptionsMultiple";
import Date from "../elements/Date";
import Datemin from "../elements/Datemin";
import DateMax from "../elements/DateMax";
import DateTimeLocal from "../elements/DateTimeLocal";
import Month from "../elements/Month";
import Week from "../elements/Week";
import Time from "../elements/Time";
import Range from "../elements/Range";
import Telephone from "../elements/Telephone";
import NumberInputType from "../elements/NumberInputType";
import NumberStep from "../elements/NumberStep";
import UrlFormType from "../elements/UrlFormType";
import Color from "../elements/Color";
import FileFormType from "../elements/FileFormType";
import FormTypeMultiple from "../elements/FormTypeMultiple";
import Textarea from "../elements/Textarea";
import Hidden from "../elements/Hidden";


const pizzaData = [
  {
    name: "Mushrooms"
  },
  {
    name: "Onions"
  },
  {
    name: "Olives"
  },
  {
    name: "Peppers"
  }
]

const gender = [
  {
    name: "Male"
  },
  {
    name: "Female"
  },
  {
    name: "Other"
  }
]

const sports = [
  {
    name: "Baseball"
  },
  {
    name: "Basketball"
  },
  {
    name: "Soccer"
  },
  {
    name: "Volleyball"
  }
]

const subjects = [
  {
    name: "Math"
  },
  {
    name: "Physics"
  },
  {
    name: "Chemistry"
  },
  {
    name: "Programming"
  },
  {
    name: "Composition"
  }
]

export default function ReusableFormTags() {
  const [formElements, setFormElements] = useState({
    text: "",
    email: "",
    password: "",
    textarea: "",
    checkbox: false,
    checkboxMultiple: [],
    radio: "",
    option: "",
    optionsMultiple: [],
    date: "2020-01-01",
    datemin: "",
    datemax: "",
    dateTimeLocal: "",
    month: "",
    time: "",
    week: "",
    file: "",
    filesMultiple: [],
    color: "#F0F0F0",
    hidden: "dslj5723oeu",
    number: 1,
    numberStep: 10,
    range: 1,
    tel: "",
    url: "",
    dataList: "",
  })

  const handleChange = (e) => {
    // function handleChange(e) {
    const { name, value } = e.target;
    let arrayOfSubjects = [];
    let file = null;
    let multiplefiles = [];

    switch (name) {
      case "text":
        setFormElements((prev) => {
          return { ...prev, [name]: value }
        })
        break;

      case "email":
        setFormElements((prev) => {
          return { ...prev, [name]: value }
        })
        break;

      case "password":
        setFormElements((prev) => {
          return { ...prev, [name]: value }
        })
        break;

      case "tel":
        setFormElements((prev) => {
          return { ...prev, [name]: value }
        })
        break;

      case "checkbox":
        setFormElements((prev) => {
          return { ...prev, [name]: e.target.checked }
        })
        break;

      /* MULTIPLE CHECKBOXES */
      case "checkboxMultiple":
        // console.log("checkboxMul", value)
        if (name === "checkboxMultiple" && e.target.checked) {
          setFormElements((prev) => {
            return { ...prev, checkboxMultiple: [...prev.checkboxMultiple, value] }
          })
        } else {
          setFormElements((prev) => {
            return {
              ...prev, checkboxMultiple: prev.checkboxMultiple.filter((item) => item !== value)
            }
          })
        }
        break;

      case "radio":
        if (e.target.checked) {
          setFormElements((prev) => {
            return { ...prev, [name]: value }
          })
        }
        break;

      case "number":
        setFormElements((prev) => {
          return { ...prev, [name]: value }
        })
        break;

      case "numberStep":
        setFormElements((prev) => {
          return { ...prev, [name]: value }
        })
        break;

      case "date":
        /* You may want to store date as UTC.  You would need to convert the stored date back to the user's local timezone. */
        /* If you are working with multiple timezones, you may also want to store the user's timezone info in your database.  There are libaries such as day.js that can perform the conversion for you.
        */
        console.log(value)
        setFormElements((prev) => {
          return { ...prev, [name]: value }
        })
        break;

      case "datemin":
        console.log(value)
        setFormElements((prev) => {
          return { ...prev, [name]: value }
        })
        break;

      case "datemax":
        console.log(value)
        setFormElements((prev) => {
          return { ...prev, [name]: value }
        })
        break;

      case "dateTimeLocal":
        /* datetime-local saves a date and time that does not contain information about the timezone.  */
        /* When storing this value in a database you may need to add a hidden field that gives the user's current timezone if that is important in your time calculations or cruicial when saving this data. */

        console.log(value)

        setFormElements((prev) => {
          return { ...prev, [name]: value }
        })

        break;

      case "month":
        setFormElements((prev) => {
          return { ...prev, [name]: value }
        })
        break;

      case "week":
        setFormElements((prev) => {
          return { ...prev, [name]: value }
        })
        break;

      case "time":
        setFormElements((prev) => {
          return { ...prev, [name]: value }
        })
        break;

      case "range":
        setFormElements((prev) => {
          return { ...prev, [name]: value }
        })
        break;

      case "url":
        setFormElements((prev) => {
          return { ...prev, [name]: value }
        })
        break;

      case "option":
        setFormElements((prev) => {
          return { ...prev, [name]: value }
        })
        break;

      case "optionsMultiple":
        arrayOfSubjects = Array.from(e.target.selectedOptions, option => option.value);

        setFormElements((prev) => {
          return { ...prev, [name]: arrayOfSubjects }
        })
        break;

      case "color":
        setFormElements((prev) => {
          return { ...prev, [name]: value }
        })
        break;

      case "onefile":
        file = e.target.files[0];
        console.log(file instanceof File)
        console.log("image file", file)
        setFormElements((prev) => {
          return { ...prev, [name]: file }
        })

        if (file) {
          const fileReader = new FileReader();

          fileReader.onload = function (e) {
            const imageDataUrl = e.target.result;

            const img = document.createElement('img');

            img.src = imageDataUrl;

            img.width = "100"

            // img.setAttribute("width", "100")

            // Append the image to the document or any other container
            document.getElementById("imgUpload").innerHTML = "";
            document.getElementById("imgUpload").appendChild(img);
          };

          // Read the file as a data URL
          fileReader.readAsDataURL(file);
        }

        break;

      case "filesMultiple":
        multiplefiles = Array.from(e.target.files);
        // console.log("multiple", multiplefiles)
        setFormElements((prev) => {
          return { ...prev, [name]: multiplefiles }
        });

        document.getElementById("imgUploadMul").innerHTML = "";

        multiplefiles.forEach((doc) => {
          // REFERENCE: https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL

          const fileReader = new FileReader();

          fileReader.onload = function (e) {
            const imageDataUrl = e.target.result;

            const img = document.createElement('img');

            img.src = imageDataUrl;

            img.width = "100"

            img.classList.add("inline-block", "pr-2")

            // img.setAttribute("width", "100")

            document.getElementById("imgUploadMul").appendChild(img);
          };

          // Read the file as a data URL
          fileReader.readAsDataURL(doc);
        })
        break;

      case "textarea":
        setFormElements((prev) => {
          return { ...prev, [name]: value }
        })
        break;

      default:
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formElements)
  }

  return (
    <>
      <div className="flex flex-row  bg-violet-200 w-full py-12">
        <section className="w-[600px] mx-auto p-8 rounded-2xl bg-indigo-200 ">
          <div>
            <h2 className="text-xl">HTML Form Elements Examples</h2>
            <form className="w-[400px]" onSubmit={handleSubmit}>
              <fieldset className="border-2 border-solid border-gray-900 px-4 py-2 my-4">
                <legend className="font-bold" >Basic Form Types</legend>
                <Text formElements={formElements.text} handleChange={handleChange} />
                <Email formElements={formElements.email} handleChange={handleChange} />
                <Password formElements={formElements.password} handleChange={handleChange} />
                <Checkbox handleChange={handleChange} />
              </fieldset>

              <fieldset className="border-2 border-solid border-gray-900 px-4 py-2 my-4">
                <legend className="font-bold" >Checkbox - Favorite Toppings</legend>
                <CheckboxMultiple dataarray={pizzaData} handleChange={handleChange} />
              </fieldset>

              <fieldset className="border-2 border-solid border-gray-900 px-4 py-2 my-4">
                <legend className="font-bold">Radio Button - Gender</legend>
                <Radio datalist={gender} handleChange={handleChange} />
              </fieldset>

              <fieldset className="border-2 border-solid border-gray-900 px-4 py-2 my-4">
                <legend className="font-bold" >Select and Options</legend>
                <Option datalist={sports} selectlabel={"Favorite Sport"} handleChange={handleChange} />
                <OptionsMultiple selectlabel={"Favorite Subjects"} datalist={subjects} handleChange={handleChange} />
              </fieldset>

              <fieldset className="border-2 border-solid border-gray-900 px-4 py-2 my-4">
                <legend className="font-bold">Date & Time Types</legend>
                <Date formElements={formElements.date} handleChange={handleChange} />
                <Datemin formElements={formElements.datemin} handleChange={handleChange} min={"2024-01-01"} />
                <DateMax formElements={formElements.datemax} handleChange={handleChange} max={"2024-01-31"} />
                <DateTimeLocal formElements={formElements.dateTimeLocal} handleChange={handleChange} labeltext={"Appointment"} />
                <Month handleChange={handleChange} formElements={formElements.month} />
                <Week formElements={formElements.week} handleChange={handleChange} labeltext={"Vacation Time"} labeltextid={"vactiontime"} />
                <Time formElements={formElements.time} handleChange={handleChange} htmlforid={"apptime"} labeltext={"Appointment Time"} />
              </fieldset>

              <fieldset className="border-2 border-solid border-gray-900 px-4 py-2 my-4">
                <legend className="font-bold" >Miscellaneous</legend>
                <Range formElements={formElements.range} handleChange={handleChange} min={0} max={50} step={1} labeltext={`Miles (between 0 and 50): `} htmlforid={"miles"} />
                <Telephone formElements={formElements.tel} handleChange={handleChange} htmlforid={"telephone"} labeltext={"Telephone Number"} />
                <NumberInputType formElements={formElements.number} handleChange={handleChange} htmlforid={"age"} labeltext={"Age"} />
                <NumberStep formElements={formElements.numberStep} handleChange={handleChange} htmlforid={"byfive"} labeltext={"By Five"} step={5} />
                <UrlFormType formElements={formElements.url} handleChange={handleChange} htmlforid={"urlLink"} labeltext={"URL Link"} />
                <Color formElements={formElements.color} handleChange={handleChange} htmlforid={"favColor"} labeltext={"Favorite Color: "} />
              </fieldset>

              <fieldset className="border-2 border-solid border-gray-900 px-4 py-2 my-4">
                <legend className="font-bold">File Image Input</legend>
                <FileFormType handleChange={handleChange} htmlforid={"imgfile"} labeltext={"Image File"} />
                <FormTypeMultiple handleChange={handleChange} htmlforid={"multipleimgfiles"} labeltext={"Images Files"} />
              </fieldset>

              <Textarea formElements={formElements.textarea} handleChange={handleChange} htmlforid={"message"} labeltext={"Message"} />
              <Hidden formElements={formElements.hidden} />

              <button type="submit" className="bg-slate-400 mt-4 py- px-2 rounded">Submit</button>
            </form>
          </div>
        </section>
        <section className="w-[600px] mx-auto p-8 rounded-2xl bg-indigo-200 ">
          <div>
            <ul>
              <li><h3>User Name: {formElements.text && formElements.text}</h3></li>
              <li><h3>Email: {formElements.email && formElements.email}</h3></li>
              <li><h3>Password: {formElements.password && formElements.password}</h3></li>
              <li><h3>Checkbox: {formElements.checkbox ? "True" : "False"}</h3></li>
              <li><h3>Selected Values:</h3>{
                formElements.checkboxMultiple.length > 0 && formElements.checkboxMultiple.map((data, idx) => {
                  return (
                    <h3 className="pl-4" key={idx}>{data}</h3>
                  )
                })
              }</li>
              <li><h3>Radio: {formElements.radio && formElements.radio}</h3></li>
              <li><h3>Option: {formElements.option && formElements.option}</h3></li>
              <li><h3>Options Selected Values:</h3>{
                formElements.optionsMultiple.length > 0 && formElements.optionsMultiple.map((data, idx) => {
                  return (
                    <h3 className="pl-4" key={idx}>{data}</h3>
                  )
                })
              }</li>
              <li><h3>Date: {formElements.date && formElements.date}</h3></li>
              <li><h3>Minimum Date: {formElements.datemin && formElements.datemin}</h3></li>
              <li><h3>Maximum Date: {formElements.datemax && formElements.datemax}</h3></li>
              <li><h3>Local Date & Time: {formElements.dateTimeLocal && formElements.dateTimeLocal}</h3></li>
              <li><h3>Month and Year: {formElements.month && formElements.month}</h3></li>
              <li><h3>Week and Year: {formElements.week && formElements.week}</h3></li>
              <li><h3>Time: {formElements.time && formElements.time}</h3></li>
              <li><h3>Range: {formElements.range && formElements.range}</h3></li>
              <li><h3>Telephone: {formElements.tel && formElements.tel}</h3></li>
              <li><h3>Number: {formElements.number && formElements.number}</h3></li>
              <li><h3>Number Step: {formElements.numberStep && formElements.numberStep}</h3></li>
              <li><h3>URL Address: {formElements.url && formElements.url}</h3></li>
              <li><h3>Color: {formElements.color && formElements.color}</h3></li>
              <li><h3>Image File: </h3>
                <div id="imgUpload"></div>
              </li>
              <li><h3>Multiple Image Files: </h3>
                <div id="imgUploadMul"></div>
              </li>
              <li><h3>Textarea: {formElements.textarea && formElements.textarea}</h3></li>
              <li><h3>Hidden Data: {formElements.hidden}</h3></li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}
