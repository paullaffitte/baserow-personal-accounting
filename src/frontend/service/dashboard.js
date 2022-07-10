export default (client) => {
    return {
      fetchAll(tableId) {
        return client.get(`/personal-accounting/${tableId}/monthly-reports/`);
      },
    }
  }
