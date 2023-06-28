const countNotisUnread = (response, notisUnread, setNotisUnread) => {
  //   const filterResponse = response?.data?.data.filter((notis) => {
  //     //   if ([...previous].find(data))
  //     return !notis?.readStatus;
  //   });
  //   filterResponse.forEach((filterEach) => {
  //     if (!notisUnread.includes(filterEach)) {
  //       //   console.log(filterEach);
  //       setNotisUnread((previous) => [
  //         ...previous.concat(
  //           response?.data?.data.filter((notis) => {
  //             //   if ([...previous].find(data))
  //             return !notis?.readStatus;
  //           })
  //         ),
  //       ]);
  //     }
  //   });

  const notisUnreadCopy = [...notisUnread];

  console.log(response);

  console.log(notisUnreadCopy, "Copy");

  setNotisUnread(response?.data.filter((data) => !data.readStatus));
};

export default countNotisUnread;
