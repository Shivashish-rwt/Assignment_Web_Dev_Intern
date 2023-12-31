import React from "react";
import logo from "./assets/Group 5.png";

function Sidebar() {
	return (
		<div className="Sidebar">
			<img src={logo} alt="Logo" className="BrandLogo" />
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="203"
				height="1"
				viewBox="0 0 203 1"
				fill="none"
				className="lineBreak-1"
			>
				<path
					opacity="0.2"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M0 0.5C0 0.223858 0.223858 0 0.5 0H202.5C202.776 0 203 0.223858 203 0.5C203 0.776142 202.776 1 202.5 1H0.499998C0.223855 1 0 0.776142 0 0.5Z"
					fill="black"
				/>
			</svg>
			<ul className="list">
				<li>
					<a href="" className="main-title">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="28"
							height="28"
							viewBox="0 0 28 28"
							fill="none"
						>
							<path
								d="M14 11.6666C18.6386 11.6666 23.3333 10.0636 23.3333 6.99998C23.3333 3.93631 18.6386 2.33331 14 2.33331C9.36129 2.33331 4.66663 3.93631 4.66663 6.99998C4.66663 10.0636 9.36129 11.6666 14 11.6666Z"
								fill="#FA782F"
							/>
							<path
								d="M4.66663 11.6666C4.66663 14.7303 9.36129 16.3333 14 16.3333C18.6386 16.3333 23.3333 14.7303 23.3333 11.6666V9.33331C23.3333 12.397 18.6386 14 14 14C9.36129 14 4.66663 12.397 4.66663 9.33331V11.6666Z"
								fill="#FA782F"
							/>
							<path
								d="M4.66663 16.3333C4.66663 19.397 9.36129 21 14 21C18.6386 21 23.3333 19.397 23.3333 16.3333V14C23.3333 17.0637 18.6386 18.6667 14 18.6667C9.36129 18.6667 4.66663 17.0637 4.66663 14V16.3333Z"
								fill="#FA782F"
							/>
							<path
								d="M4.66663 21C4.66663 24.0637 9.36129 25.6667 14 25.6667C18.6386 25.6667 23.3333 24.0637 23.3333 21V18.6667C23.3333 21.7304 18.6386 23.3334 14 23.3334C9.36129 23.3334 4.66663 21.7304 4.66663 18.6667V21Z"
								fill="#FA782F"
							/>
						</svg>
						My Projects
					</a>
				</li>
				<li>
					<a href="" className="sub-title">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="25"
							viewBox="0 0 24 25"
							fill="none"
						>
							<path
								d="M12.5902 5.41804C12.5902 2.70188 14.792 0.5 17.5082 0.5H23.8033C23.9119 0.5 24 0.588075 24 0.696721V6.9918C24 9.70795 21.7981 11.9098 19.082 11.9098H12.5902V5.41804Z"
								fill="#C4C4C4"
							/>
							<path
								d="M12.5902 19.582C12.5902 22.2981 14.792 24.5 17.5082 24.5H23.8033C23.9119 24.5 24 24.4119 24 24.3033V18.0082C24 15.292 21.7981 13.0902 19.082 13.0902H12.5902V19.582Z"
								fill="#C4C4C4"
							/>
							<path
								d="M11.4098 5.41804C11.4098 2.70188 9.20796 0.5 6.4918 0.5H0.196722C0.0880756 0.5 0 0.588075 0 0.696721V6.9918C0 9.70795 2.20188 11.9098 4.91803 11.9098H11.4098V5.41804Z"
								fill="#C4C4C4"
							/>
							<path
								d="M11.4098 19.582C11.4098 22.2981 9.20796 24.5 6.4918 24.5H0.196722C0.0880756 24.5 0 24.4119 0 24.3033V18.0082C0 15.292 2.20188 13.0902 4.91803 13.0902H11.4098V19.582Z"
								fill="#C4C4C4"
							/>
						</svg>
						Sample Projects
					</a>
				</li>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="203"
					height="1"
					viewBox="0 0 203 1"
					fill="none"
                    className="lineBreak-2"
				>
					<path
						opacity="0.2"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M0 0.5C0 0.223858 0.223858 0 0.5 0H202.5C202.776 0 203 0.223858 203 0.5C203 0.776142 202.776 1 202.5 1H0.499998C0.223855 1 0 0.776142 0 0.5Z"
						fill="black"
					/>
				</svg>

				<li>
					<a href="" className="sub-title">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="28"
							height="28"
							viewBox="0 0 28 28"
							fill="none"
						>
							<path
								d="M21.5744 2.71825L25.2828 6.42681C26.308 7.45194 26.308 9.114 25.2828 10.1391L22.2677 13.1537C23.5312 13.3432 24.5 14.4332 24.5 15.7496V21.8745C24.5 23.3242 23.3247 24.4995 21.875 24.4995H6.125C4.67525 24.4995 3.5 23.3242 3.5 21.8745V6.12453C3.5 4.67478 4.67525 3.49953 6.125 3.49953H12.25C13.567 3.49953 14.6576 4.46955 14.8462 5.73416L17.862 2.71825C18.8872 1.69312 20.5492 1.69312 21.5744 2.71825ZM5.25 21.8745C5.25 22.3578 5.64176 22.7495 6.125 22.7495L13.1238 22.7487L13.125 14.8746L5.25 14.8737V21.8745ZM14.8738 22.7487L21.875 22.7495C22.3582 22.7495 22.75 22.3578 22.75 21.8745V15.7496C22.75 15.2663 22.3582 14.8746 21.875 14.8746L14.8738 14.8737V22.7487ZM12.25 5.24953H6.125C5.64176 5.24953 5.25 5.64127 5.25 6.12453V13.1237H13.125V6.12453C13.125 5.64127 12.7332 5.24953 12.25 5.24953ZM14.875 10.8604V13.1246L17.1383 13.1237L14.875 10.8604ZM19.0994 3.95568L15.3909 7.66425C15.0492 8.00595 15.0492 8.55998 15.3909 8.90169L19.0994 12.6103C19.4411 12.952 19.9951 12.952 20.3369 12.6103L24.0455 8.90169C24.3872 8.55998 24.3872 8.00595 24.0455 7.66425L20.3369 3.95568C19.9951 3.61398 19.4411 3.61398 19.0994 3.95568Z"
								fill="#C4C4C4"
							/>
							<path
								d="M19.0994 3.95568L15.3909 7.66425C15.0492 8.00595 15.0492 8.55998 15.3909 8.90169L19.0994 12.6103C19.4411 12.952 19.9951 12.952 20.3369 12.6103L24.0455 8.90169C24.3872 8.55998 24.3872 8.00595 24.0455 7.66425L20.3369 3.95568C19.9951 3.61398 19.4411 3.61398 19.0994 3.95568Z"
								fill="#C4C4C4"
							/>
						</svg>
						Apps
					</a>
				</li>
				<li>
					<a href="" className="sub-title">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="25"
							viewBox="0 0 24 25"
							fill="none"
						>
							<g clip-path="url(#clip0_101_35)">
								<path
									d="M11.5323 0.967743C9.2514 0.967743 7.02175 1.6441 5.12528 2.91128C3.22881 4.17846 1.7507 5.97955 0.877846 8.0868C0.00499677 10.194 -0.22338 12.5128 0.221594 14.7498C0.666569 16.9869 1.76491 19.0417 3.37773 20.6545C4.99054 22.2674 7.04539 23.3657 9.28243 23.8107C11.5195 24.2556 13.8382 24.0273 15.9455 23.1544C18.0527 22.2816 19.8538 20.8034 21.121 18.907C22.3882 17.0105 23.0645 14.7809 23.0645 12.5C23.0611 9.4425 21.845 6.5112 19.683 4.34922C17.5211 2.18724 14.5898 0.971145 11.5323 0.967743V0.967743ZM14.9117 13.1303L12.0644 15.118L10.5706 16.1607C10.4554 16.2412 10.3203 16.2885 10.18 16.2975C10.0397 16.3065 9.89967 16.277 9.77504 16.212C9.65042 16.147 9.54599 16.049 9.47312 15.9289C9.40026 15.8087 9.36174 15.6708 9.36175 15.5302V9.46978C9.36174 9.32922 9.40026 9.19135 9.47312 9.07115C9.54599 8.95096 9.65042 8.85304 9.77504 8.78804C9.89967 8.72304 10.0397 8.69345 10.18 8.70249C10.3203 8.71153 10.4554 8.75885 10.5706 8.8393L12.0644 9.88197L14.9117 11.8695C15.0132 11.9404 15.0961 12.0347 15.1533 12.1444C15.2106 12.2542 15.2405 12.3761 15.2405 12.4999C15.2405 12.6237 15.2106 12.7456 15.1533 12.8554C15.0961 12.9651 15.0132 13.0595 14.9117 13.1303Z"
									fill="#C4C4C4"
								/>
							</g>
							<defs>
								<clipPath id="clip0_101_35">
									<rect
										width="23.0645"
										height="23.0645"
										fill="white"
										transform="translate(0 0.967743)"
									/>
								</clipPath>
							</defs>
						</svg>
						Intro to Necleo
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Sidebar;
