import React from "react";
import './TodosLoading.css'


function TodosLoading() {
    return (
        <div className="skeleton-container">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="skeleton-item">
            
          </div>
        ))}
      </div>
    );
}

export { TodosLoading };