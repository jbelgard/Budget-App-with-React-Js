import React from 'react';

const BalanceDisplay = () => {
    return (
        <div className="row">
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-header">Budget</div>
                    <div className="card-body">
                        <h5 className="text-center card-title">{value.budget}</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-header">Expenses</div>
                    <div className="card-body">
                        <h5 className="text-center card-title">{totalExpense}</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-header">Balance</div>
                    <div className="card-body">
                        <h5 className="text-center card-title">{value.budget - totalExpense}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BalanceDisplay
