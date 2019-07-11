import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from '../components/Title';
// get all unique value

const getUnique =(items, value) => {
    return [...new Set(items.map(item => item[value]))]
}
export default function RoomsFilter({ rooms }) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;
    //get unique value
    let types = getUnique(rooms,"type");
    //add all
    types = ['all',...types];
    // map to jsx
    types = types.map((item, index) => {
      return <option value={item} key={index}>{item} </option>
    })

    let people = getUnique(rooms, "capacity");
    people = people.map((item, index) =>{
        return <option key={index} value={item} > {item}</option>
    })
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type*/}
        <div className="form-group">
            <label htmlFor="type">room type </label>
            <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                {types}
            </select>
        </div>
        {/*end select type*/}
        {/* Guestss*/}
        <div className="form-group">
            <label htmlFor="capacity">Guest </label>
            <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                {people}
            </select>
        </div>
        {/*end Guestss*/}
        {/* room price */}
        <div className="form-group"> 
            <label htmlFor="price">room price ${price}</label>
            <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
        </div>
        {/*end of room price */}
        {/* Size */}
        <div className="form-group">
            <label htmlFor="size"> room size </label>
            <div className="size-inputs">
            {/* <span > From </span> */}
            <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
            {/* <span > To </span>             */}
            <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
            </div>
        </div>
        {/*End of Size */}
        {/* extras */}
        <div className="form-group">
            <div className="single-extra">
                <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                <label htmlFor="breakfast"> breakfast </label>
            </div>
            <div className="single-extra">
                <input type="checkbox" name="pets" id="pest" checked={pets} onChange={handleChange}/>
                <label htmlFor="extras"> pets </label>
            </div>

        </div>
        {/* end of extras */}
      </form>
    </section>
  )
}
