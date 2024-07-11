const searchHandler = async (query) => {
    try {
      const response = await fetch('http://localhost:3000/product/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (response.ok) {
        setResults(data.results);
        window.location.href = "./";
        return { success: true };
    } else {
        const responseData = await response.json();
        if (response.status === 400) {
            return { error: responseData };
        } else {
            console.error('Search failed:', responseData);
            return { error: 'Search failed' };
        }
    }

    } catch (error) {
      console.error(error);
    }
  };

export default searchHandler;
