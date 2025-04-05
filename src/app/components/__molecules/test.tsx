//   const [errors, setErrors] = useState<{
  //     day: string;
  //     month: string;
  //     year: string;
  //     name: string;
  //   }>({
  //     day: "",
  //     month: "",
  //     year: "",
  //     name: "",
  //   });

  //   const validName = (name: string) => {
  //     if (name === "") {
  //       return "Name cannot be empty";
  //     }
  //     return "";
  //   };

  //   const validateDay = (day: string) => {
  //     const dayNum = parseInt(day, 10);
  //     if (isNaN(dayNum) || dayNum < 1 || dayNum > 31) {
  //       return "Day must be between 01 and 31.";
  //     }

  //     const yearNum = parseInt(year, 10);

  //     if (month === "February") {
  //       const isLeapYear = (year: number) =>
  //         (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  //       if (isLeapYear(yearNum) && dayNum > 29) {
  //         return "February can't have more than 29 days in a leap year.";
  //       }
  //       if (!isLeapYear(yearNum) && dayNum > 28) {
  //         return "February can't have more than 28 days in a non-leap year.";
  //       }
  //     }

  //     if (
  //       ["April", "June", "September", "November"].includes(month) &&
  //       dayNum > 30
  //     ) {
  //       return `${month} can't have more than 30 days.`;
  //     }

  //     return "";
  //   };

  //   const validateMonth = (month: string) => {
  //     if (month === "0") {
  //       return "Please select a valid month.";
  //     }
  //     return "";
  //   };

  //   const validateYear = (year: string) => {
  //     if (year.length !== 4 || isNaN(parseInt(year, 10))) {
  //       return "Year must be a valid 4-digit number.";
  //     }
  //     const currentYear = new Date().getFullYear();
  //     if (parseInt(year, 10) > currentYear || parseInt(year, 10) < 1910) {
  //       return "please enter valid year";
  //     }
  //     return "";
  //   };

  //   const handleSubmit = () => {
  //     const dayError = validateDay(day);
  //     const monthError = validateMonth(month);
  //     const yearError = validateYear(year);
  //     const nameError = validName(name);
  //     setErrors({
  //       day: dayError,
  //       month: monthError,
  //       year: yearError,
  //       name: nameError,
  //     });

  //     if (!dayError && !monthError && !yearError) {
  //       alert("Form is valid, proceeding with the submission.");
  //     }
  //   };  const [name, setname] = useState<string>("");