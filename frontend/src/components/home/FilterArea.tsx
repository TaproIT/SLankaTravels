import NiceSelect from "../../ui/NiceSelect";

 

const FilterArea = () => {

	const selectHandler = (e: any) => {console.log(e);};



	
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-xl-10 col-lg-12 col-md-10 col-10 mx-auto text-center">
						<div className="tr_search_filter">
							<form
								id="search_filter" 
								className="d-flex justify-content-center"
								 onSubmit={e => e.preventDefault()}
							>
								<div className="tr_search_location">
									<label htmlFor="trs_location">Location*</label> 
									<NiceSelect
										className="trs_location d-flex align-items-center"
										options={[
											{ value: "00", text: "Dubai Oasis" }, 
											{ value: "00", text: "Barcelona Beach" }, 
											{ value: "00", text: "Caribbean Cove" }, 
											{ value: "00", text: "Dubai Oasis" }, 
											{ value: "00", text: "London Luxe" }, 
											{ value: "00", text: "Maldives Haven" }, 
										]}
										defaultCurrent={0}
										onChange={selectHandler}
										placeholder="Select an option"
										name="myNiceSelect"
									/>


								</div>

								<div className="check_in">
									<label htmlFor="checkin_field">Check - In*</label>
									<div className="trdate_picker date" id="tr_dpicker1">
										<input
											type="text"
											className="form-control"
											placeholder="Check In Date"
											id="checkin_field"
										/>
										<span className="input-group-append">
											<i className="fa-solid fa-calendar-days"></i>
										</span>
									</div>
								</div>

								<div className="check_out">
									<label htmlFor="checkout_field">Check - Out*</label>
									<div className="trdate_picker date" id="tr_dpicker2">
										<input
											type="text"
											className="form-control"
											placeholder="Check Out Date"
											id="checkout_field"
										/>
										<span className="input-group-append">
											<i className="fa-solid fa-calendar-days"></i>
										</span>
									</div>
								</div>

								<div className="adut_box">
									<label>Adult*</label>
									<NiceSelect
										className="trs_location d-flex align-items-center"
										options={[
											{ value: "00", text: "1" },  
											{ value: "00", text: "2" },  
											{ value: "00", text: "3" },  
											{ value: "00", text: "4" },  
											{ value: "00", text: "5" },  
											{ value: "00", text: "6" },  
											{ value: "00", text: "7" },  
											{ value: "00", text: "8" },  
											{ value: "00", text: "9" },  
											{ value: "00", text: "10" },  
										]}
										defaultCurrent={0}
										onChange={selectHandler}
										placeholder="Select an option"
										name="myNiceSelect"
									/>
								</div>

								<button type="submit">
									Submit <i className="ph ph-paper-plane-tilt"></i>
								</button>
							</form>
							<p className="form-message text-center"></p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FilterArea;
