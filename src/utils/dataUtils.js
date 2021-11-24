export const drawDetailsFromBackend = (data) => {
  const mungedData = data.map(
    ({ id, title, createdDate, timerSetting, url }) => ({
      id: id,
      title: title,
      createdDate: createdDate,
      timerSetting: timerSetting,
      url: url,
    })
  );

  return mungedData;
};
