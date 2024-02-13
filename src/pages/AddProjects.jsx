// import React, { useState } from 'react'
// import axios from 'axios'
// import { useFormik } from 'formik'
// import * as yup from 'yup'
// export default function AddProject() {
//     const [data, setdata] = useState(false)
//     const formik = useFormik({
//         initialValues: ({
//             title: "",
//             desc: "",
//             link: "",
//             img: ""
//         }),
//         validationSchema: yup.object({
//             title: yup
//                 .string()
//                 .required("Please Enter Title"),
//             desc: yup
//                 .string(),
//             link: yup
//                 .string(),
//             img: yup
//                 .string(),
//         }),
//         onSubmit: async (values) => {
//             const url = "http://localhost:5000/projects/add"
//             const { data } = await axios.post(url, values)
//             console.log(values);
//         }
//     })

//     return (
//         <>

//             <div className="container my-5">
//                 <div className="row">
//                     <div className="col-sm-6 offset-sm-3">
//                         <div className="card">
//                             <div className="card-header bg-warning  text-center"><strong>Add Project</strong></div>
//                             <div className="card-body bg-dark text-primary">
//                                 <form onSubmit={formik.handleSubmit}>
//                                     <div className="mt-2">
//                                         <label for="title" className="form-label"><strong>Prject Title</strong></label>
//                                         <input
//                                             type="text"
//                                             value={formik.values.title}
//                                             onChange={formik.handleChange}
//                                             name="title"
//                                             className="form-control"
//                                             id="email"
//                                             placeholder="Enter Project Title    "
//                                         />
//                                         <div className="valid-feedback">Looks good!</div>
//                                         <div className="invalid-feedback">Please choose a username.</div>
//                                     </div>
//                                     <div className="mt-2">
//                                         <label for="desc" className="form-label">Description</label>
//                                         <textarea
//                                             type="text"
//                                             value={formik.values.desc}
//                                             onChange={formik.handleChange}
//                                             name="desc"
//                                             className="form-control"
//                                             id="desc"
//                                             placeholder="Enter Description"
//                                         />
//                                         <div className="valid-feedback">Looks good!</div>
//                                         <div className="invalid-feedback">Please choose a desc.</div>
//                                     </div>
//                                     <div className="mt-2">
//                                         <label for="link" className="form-label"
//                                         >Link</label
//                                         >
//                                         <input
//                                             type="text"
//                                             value={formik.values.link}
//                                             onChange={formik.handleChange}
//                                             name="link"
//                                             className="form-control"
//                                             id="link"
//                                             placeholder="Enter URL"
//                                         />
//                                         <div className="valid-feedback">Looks good!</div>
//                                         <div className="invalid-feedback">
//                                             Please Recheck Your Password.
//                                         </div>
//                                     </div>
//                                     <div className="mt-2">
//                                         <label for="link" className="form-label"
//                                         >Image</label
//                                         >
//                                         <input
//                                             type="text"
//                                             value={formik.values.img}
//                                             onChange={formik.handleChange}
//                                             name="img"
//                                             className="form-control"
//                                             id="link"
//                                             placeholder="Enter Image URL"
//                                         />
//                                         <div className="valid-feedback">Looks good!</div>
//                                         <div className="invalid-feedback">
//                                             Please Recheck Your Password.
//                                         </div>
//                                     </div>
//                                     <button type="submit" className="btn btn-primary w-100 mt-3">
//                                         Add Project
//                                     </button>

//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }
