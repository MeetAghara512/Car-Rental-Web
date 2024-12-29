import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { alldata } from "./Assets/RentCarData";
import './SmallCarCard.css';

function SmallCarCard(props) {
	const { ele: data } = props;
	const [car, setCar] = useState(null);
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [damageDescription, setDamageDescription] = useState('');
	const [rating, setRating] = useState(0);

	const ShowDetails = (id) => {
		const selectedCar = alldata.find((car) => car.Id === id);
		setCar(selectedCar);
		setIsPopupOpen(true);
	};

	const closePopup = () => {
		setIsPopupOpen(false);
	};

	const handleChange = (event) => {
		setDamageDescription(event.target.value);
	};

	const handleReturnCar = () => {
		toast.success("Car returned successfully with rating: " + rating);
		closePopup();
	};

	const handleRatingChange = (newRating) => {
		setRating(newRating);
	};

	return (
		<>
			<div className="SmallCard flex justify-between items-center border-b border-gray-200 p-4 w-[60%] m-auto">
				<ul className="SmallCard-ul flex justify-between items-center border-b border-gray-200 p-4">
					<li className="SmallCard-li m-[5px]">{data.CompanyName}</li> |
					<li className="SmallCard-li m-[5px] ">{data.Model}</li> |
					<li className="SmallCard-li m-[5px] ">{data.Id}</li> | 
				</ul>


				<div>
					<button className="w-[100px] rounded-lg bg-blue-200 h-[35px] border-2 border-black"
						onClick={() => ShowDetails(data.Id)}
					>
						Submit Car
					</button>
					{isPopupOpen && (
						<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-10">
							<div className="flex flex-col">
								<div className="flex items-center">
									<img src={car.img} alt="Car" className="w-16 h-16 mr-2" />
									<div>
										<h2 className="text-lg font-bold">{car.Model}</h2>
										<p className="text-sm">{car.CompanyName}</p>
										<p className="text-sm">₹ {car.Price} /hr</p>
									</div>
								</div>
								<div className="flex items-center mt-4">
									<div className="flex">
										{[1, 2, 3, 4, 5].map((star) => (
											<span key={star} className={`text-xl ${star <= rating ? 'text-yellow-400' : 'text-gray-400'}`} onClick={() => handleRatingChange(star)}>&#9733;</span>
										))}
									</div>
									<input className="w-[50%] h-[10%] border border-gray-300 rounded-lg p-2 ml-4 block"
										type="text"
										id="carDamageInput"
										name="carDamageInput"
										placeholder="Enter car damage description..."
										value={damageDescription}
										onChange={handleChange}
									/>
								</div>
								<div className="mt-4 flex justify-between">
									<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleReturnCar}>Return Car</button>
									<button onClick={closePopup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Close</button>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default SmallCarCard;
