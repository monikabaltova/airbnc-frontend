import { useSearchParams } from "react-router";

export default function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleFilter(e) {
    const filterValue = e.target.value;
    if (filterValue) {
      searchParams.set("sort", filterValue);
    } else {
      searchParams.delete("sort");
    }
    setSearchParams(searchParams);
  }

  return (
    <div id="filters">
      <label htmlFor="sort">Sort by: </label>
      <select
        id="sort"
        value={searchParams.get("sort") || ""}
        onChange={handleFilter}
      >
        <option value=""></option>
        <option value="favourites">Most Popular</option>
        <option value="maxprice">Highest Price</option>
        <option value="minprice">Lowest Price</option>
      </select>
    </div>
  );
}
