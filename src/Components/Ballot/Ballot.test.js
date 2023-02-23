import { render, screen } from "@testing-library/react";
import Ballot from "./Ballot";

describe("Ballot", () => {
	test("it renders", () => {
		render(<Ballot />);

		expect(screen.getByText("AWARDS 2021")).toBeInTheDocument();
	});
});
