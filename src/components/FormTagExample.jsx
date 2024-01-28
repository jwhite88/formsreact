import { useState } from 'react'

export default function FormTagExample() {
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
    const [setselectTag, setSetselectTag] = useState("")
    const [setselectTagMultiple, setSetselectTagMultiple] = useState([])
    const [textareaTag, setTextareaTag] = useState("")
    const [inputDatalist, setInputDatalist] = useState("")

    const handleChange = (e) => {
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
                // console.log(value)
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
                console.log("multiple", multiplefiles)
                setFormElements((prev) => {
                    return { ...prev, [name]: multiplefiles }
                })

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

                                <div id="text">
                                    <div className="flex justify-between pt-2">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" id="username" className="w-64 border-solid border-[1px] border-slate-700 rounded pl-1" name="text" value={formElements.text} onChange={handleChange} />
                                    </div>
                                </div>

                                <div id="email">
                                    <div className="flex justify-between pt-2">
                                        <label htmlFor="emailField">Email</label>
                                        <input type="email" id="emailField" className="w-64 border-solid border-[1px] border-slate-700 rounded pl-1" name="email" value={formElements.email} onChange={handleChange} />
                                    </div>
                                </div>

                                <div id="password">
                                    <div className="flex justify-between pt-2">
                                        <label htmlFor="passwordfield">Password</label>
                                        <input type="password" id="passwordfield" className="w-64 border-solid border-[1px] border-slate-700 rounded pl-1" name="password" value={formElements.password} onChange={handleChange} />
                                    </div>
                                </div>

                                <div id="checkbox">
                                    <div className="flex-form">
                                        <label htmlFor="subscribe">Subscribe</label>
                                        <input type="checkbox" name="checkbox" id="subscribe" onChange={handleChange} />
                                    </div>
                                </div>
                                
                            </fieldset>

                            {/* className="border border-solid border-gray-300 p-3" */}
                            <div id="checkboxmultiple">
                                <fieldset className="border-2 border-solid border-gray-900 px-4 py-2 my-4">
                                    <legend className="font-bold" >Checkbox - Favorite Toppings</legend>
                                    <div className="flex-form">
                                        <label htmlFor="mushrooms">Mushrooms</label>
                                        <input type="checkbox" name="checkboxMultiple" id="mushrooms" value="Mushrooms" onChange={handleChange} />
                                    </div>
                                    <div className="flex-form">
                                        <label htmlFor="onions">Onions</label>
                                        <input type="checkbox" name="checkboxMultiple" id="onions" value="Onions" onChange={handleChange} />
                                    </div>
                                    <div className="flex-form">
                                        <label htmlFor="olives">Olives</label>
                                        <input type="checkbox" name="checkboxMultiple" id="olives" value="Olives" onChange={handleChange} />
                                    </div>
                                    <div className="flex-form">
                                        <label htmlFor="peppers">Peppers</label>
                                        <input type="checkbox" name="checkboxMultiple" id="peppers" value="Peppers" onChange={handleChange} />
                                    </div>
                                </fieldset>
                            </div>

                            <div className="radio">
                                <fieldset className="border-2 border-solid border-gray-900 px-4 py-2 my-4">
                                    <legend className="font-bold">Radio Button - Gender</legend>
                                    <div className="flex-form">
                                        <label htmlFor="male">Male</label>
                                        <input type="radio" name="radio" id="male" value="Male" onChange={handleChange} />
                                    </div>
                                    <div className="flex-form">
                                        <label htmlFor="female">Female</label>
                                        <input type="radio" name="radio" id="female" value={"Female"} onChange={handleChange} />
                                    </div>
                                    <div className="flex-form">
                                        <label htmlFor="other">Other</label>
                                        <input type="radio" name="radio" id="other" value="Other" onChange={handleChange} />
                                    </div>
                                </fieldset>
                            </div>

                            <fieldset className="border-2 border-solid border-gray-900 px-4 py-2 my-4">
                                <legend className="font-bold" >Select and Options</legend>

                                <div className="option pb-4">
                                    <div className="w-60 flex justify-between pt-2">
                                        <label htmlFor="sport">Favorite Sport</label>
                                        <select id="sport" className="" name="option" onChange={handleChange}>
                                            <option disabled={true} selected={true}>Choose...</option>
                                            <option value="Baseball">Baseball</option>
                                            <option value="Basketball">Basketball</option>
                                            <option value="Football">Football</option>
                                            <option value="Soccer">Soccer</option>
                                            <option value="Volleyball">Volleyball</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="multipleOption pb-4">
                                    <div className="w-64 flex justify-between pt-2">
                                        <label htmlFor="subjects">Favorite Subjects</label>
                                        <select name="optionsMultiple" id="subjects" multiple={true} size="5" onChange={handleChange}>
                                            <option disabled={true} selected={true}>Choose...</option>
                                            <option value="Math">Math</option>
                                            <option value="Physics">Physics</option>
                                            <option value="Chemistry">Chemistry</option>
                                            <option value="Programming">Programming</option>
                                            <option value="Composition">Composition</option>
                                        </select>
                                    </div>
                                </div>

                            </fieldset>

                            <fieldset className="border-2 border-solid border-gray-900 px-4 py-2 my-4">
                                <legend className="font-bold">Date & Time Types</legend>

                                <div id="date">
                                    <div className="w-64 flex justify-between pt-2">
                                        <label htmlFor="birthday">Birthday</label>
                                        <input type="date" id="birthday" name="date" value={formElements.date} onChange={handleChange} />
                                    </div>
                                </div>

                                <div id="datemin">
                                    <div className="w-64 flex justify-between pt-2">
                                        <label htmlFor="startdate">Start Date</label>
                                        <input type="date" id="startdate" name="datemin" min="2024-01-01" value={formElements.datemin} onChange={handleChange} />
                                    </div>
                                </div>

                                <div id="datemax">
                                    <div className="w-64 flex justify-between pt-2">
                                        <label htmlFor="enddate">End Date</label>
                                        <input type="date" id="enddate" name="datemax" max="2024-01-31" value={formElements.datemax} onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="dateTimeLocal">
                                    <div className="w-68 flex justify-between pt-2">
                                        <label htmlFor="appointment">Appointment</label>
                                        <input type="datetime-local" id="appointment" name="dateTimeLocal" value={formElements.dateTimeLocal} onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="month">
                                    <div className="w-68 flex justify-between pt-2">
                                        <label htmlFor="monthyear">Month and Year</label>
                                        <input type="month" id="monthyear" name="month" value={formElements.month} onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="week">
                                    <div className="w-68 flex justify-between pt-2">
                                        <label htmlFor="vacation">Vaction Week</label>
                                        <input type="week" id="vacation" name="week" value={formElements.week} onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="time">
                                    <div className="w-68 flex justify-between pt-2">
                                        <label htmlFor="appttime">Appointment Time</label>
                                        <input type="time" id="appttime" name="time" value={formElements.time} onChange={handleChange} />
                                    </div>
                                </div>

                            </fieldset>

                            <fieldset className="border-2 border-solid border-gray-900 px-4 py-2 my-4">
                                <legend className="font-bold" >Miscellaneous</legend>

                                <div className="range">
                                    <div className=" flex justify-between pt-2">
                                        <label htmlFor="miles">Miles (between 0 and 50): <span>{formElements.range}</span></label>
                                        <input type="range" id="miles" name="range" value={formElements.range} onChange={handleChange} min="0" max="50" step="1" />
                                    </div>
                                </div>

                                <div id="tel">
                                    <div className="flex justify-between pt-2">
                                        <label htmlFor="telephone">Telephone Number</label>
                                        <input type="tel" id="telephone" className="w-64 border-solid border-[1px] border-slate-700 rounded pl-1" name="tel" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={formElements.tel} onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="number">
                                    <div className="w-28 flex justify-between pt-2">
                                        <label htmlFor="age">Age</label>
                                        <input type="number" id="age" className="w-12 pl-1" name="number" value={formElements.number} onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="numberStep">
                                    <div className="w-28 flex justify-between pt-2">
                                        <label htmlFor="byfive">By Five</label>
                                        <input type="number" id="byfive" className="w-12 pl-1" name="numberStep" step="5" value={formElements.numberStep} onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="url">
                                    <div className="w-90 flex justify-between pt-2">
                                        <label htmlFor="urlLink">URL Link</label>
                                        <input type="url" id="urlLink" className="w-80 pl-1" name="url" value={formElements.url} onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="color">
                                    <div className="w-56 flex justify-between pt-2">
                                        <label htmlFor="favoriteColor">Favorite Color: <span>{formElements.color}</span></label>
                                        <input type="color" id="favoriteColor" className="w-8" name="color" value={formElements.color} onChange={handleChange} />
                                    </div>
                                </div>

                            </fieldset>

                            <fieldset className="border-2 border-solid border-gray-900 px-4 py-2 my-4">
                                <legend className="font-bold">File Image Input</legend>

                                <div className="file">
                                    <div className="w-[420px] flex justify-between pt-2">
                                        <label htmlFor="imgfile">Image File</label>
                                        <input type="file" id="imgfile" className="" name="onefile" onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="filesMultiple">
                                    <div className="w-[420px] flex justify-between pt-2">
                                        <label htmlFor="multipleimgfiles">Image Files</label>
                                        <input type="file" id="multipleimgfiles" multiple={true} className="" name="filesMultiple" onChange={handleChange} />
                                    </div>
                                </div>

                            </fieldset>

                            <div className="textarea">
                                <div className="flex flex-col pt-2 gap-2">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="textarea" id="message" cols="30" rows="10" value={formElements.textarea} onChange={handleChange}></textarea>
                                </div>
                            </div>

                            <input type="hidden" name="hidden" value={formElements.hidden} />

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
