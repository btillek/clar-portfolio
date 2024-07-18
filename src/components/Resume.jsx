import './Resume.css'

import { RESUME } from '../resume-data'

export default function Resume({showResume}) {
  return (
    <>

        <div className="resume-overlay">
          <div className="resume-container">

            {RESUME.map((section) => {
              return (
                <div className="resume-section">

                  <div className="resume-item">
                    <div className="resume-header">
                      {section.category}
                    </div>
                  </div>

                    {
                      section.items.map((item) => {
                        return (
                          <div className="resume-item">
                            {/* <div style={{display: "flex", justifyContent: "space-between"}}> */}
                              <div className="resume-place">{item.place}</div>
                              <div className="resume-year">{item.year}</div>
                            {/* </div> */}
                            <div className="resume-what">{item.what}</div>
                          </div>
                        )
                      })
                    }

                </div>
              )
            })}
          </div>
        </div>

    </>
  )
}
