import { Divider } from "@mui/material";
import React, {useState, useEffect} from "react";
import './table.css'
export default function CarProfileBody({car}) {

    return (
      <div className="pl-1 pr-1" style={{ fontSize: "24px" }}>
        <div className="row">
          <div className="col">
            <table>
              <tr>
                <th>Company</th>
                <td>{car.companyEnglish}</td>
              </tr>
              <tr>
                <th>Model</th>
                <td>{car.model}</td>
              </tr>
              <tr>
                <th>Year</th>
                <td>{car.year}</td>
              </tr>

              <tr>
                <th>Type Of Engine</th>
                <td>{car.engine}</td>
              </tr>
              <tr>
                <th>Mileage</th>
                <td>{car.km + " km"}</td>
              </tr>
            </table>
          </div>
          <div className="col">
            <table>
              <tr>
                <th>Owners</th>
                <td>{car.numberOfVehicleOwners}</td>
              </tr>
              <tr>
                <th>Price (Net)</th>
                <td>{car.price + "$ (" + car.netPrice + "$)"}</td>
              </tr>
              <tr>
                <th>Fuel Consumption</th>
                <td>{car.fuelConsumption}</td>
              </tr>
              <tr>
                <th>Seats</th>
                <td>{car.numberOfSeats}</td>
              </tr>
              <tr>
                <th>Door Count</th>
                <td>{car.doorCount}</td>
              </tr>
            </table>
          </div>
          <div className="col">
            <table>
              <tr>
                <th>Gearbox</th>
                <td>{car.gearbox}</td>
              </tr>
              <tr>
                <th>Emission Class</th>
                <td>{car.emissionClass}</td>
              </tr>
              <tr>
                <th>First Registration</th>
                <td>
                  {Date(car.firstRegistration)
                    .toString()
                    .substring(
                      0,
                      Date(car.firstRegistration).toString().indexOf(":") - 2
                    )
                    .substring(
                      Date(car.firstRegistration).toString().indexOf(" ")
                    )}
                </td>
              </tr>
              <tr>
                <th>Colour</th>
                <td>{car.colour}</td>
              </tr>
              <tr>
                <th>Interior Design</th>
                <td>{car.iteriorDesign}</td>
              </tr>
            </table>
          </div>
          {/* <div className="col-1">

          </div> */}
        </div>
      </div>
    );
}