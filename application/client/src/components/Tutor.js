/*
File: The tutor dashboard
Worked on by: Rui Qi Huang
Purpose: allows tutor to view messages form students
*/


import './Tutor.css';
import React from "react";


function Tutor() {

    return (



    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div id="dashboard" className="card-body bg-info text-white mailbox-widget pb-0">
                        <h2 className="text-white pb-3">Dashboard</h2>

                    </div>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade active show" id="inbox" aria-labelledby="inbox-tab"
                             role="tabpanel">
                            <div>
                                <div className="row p-4 no-gutters align-items-center">
                                    <div className="col-sm-12 col-md-6">
                                        <h3 className="font-light mb-0"><i className="ti-email mr-2"/>Inbox</h3>

                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <ul className="list-inline dl mb-0 float-left float-md-right">
                                            <li className="list-inline-item text-info mr-3">

                                            </li>

                                        </ul>
                                    </div>
                                </div>

                                <div className="table-responsive">
                                    <table className="table email-table no-wrap table-hover v-middle mb-0 font-14">
                                        <tbody>

                                        <tr className="border-top">

                                            <td className="pl-3">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="cst1"/>
                                                    <label className="custom-control-label"
                                                           htmlFor="cst1">&nbsp;</label>
                                                </div>
                                            </td>

                                            <td><i className="fa fa-star text-warning"></i></td>
                                            <td>
                                                <span className="mb-0 text-muted">Bob Shimurda</span>
                                            </td>

                                            <td>
                                                <a className="link" href="javascript: void(0)">

                                                    <span className="text-dark">but also the leap into electronic typesetting, remaining essentially unchanged. It was</span>
                                                </a>
                                            </td>

                                            <td><i className="fa fa-paperclip text-muted"></i></td>

                                            <td className="text-muted">May 13</td>
                                        </tr>

                                        <tr>

                                            <td className="pl-3">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="cst2"/>
                                                    <label className="custom-control-label"
                                                           htmlFor="cst2">&nbsp;</label>
                                                </div>
                                            </td>

                                            <td><i className="fa fa-star"></i></td>

                                            <td>
                                                <span className="mb-0 text-muted">Genelia</span>
                                            </td>
                                            <td>
                                                <a className="link" href="javascript: void(0)">

                                                    <span className="text-dark">it has a more-or-less normal distribution of letters, as opposed to</span>
                                                </a>
                                            </td>
                                            <td><i className="fa fa-paperclip text-muted"></i></td>
                                            <td className="text-muted">January 13</td>
                                        </tr>
                                        <tr>
                                            <td className="pl-3">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="cst3"/>
                                                    <label className="custom-control-label"
                                                           htmlFor="cst3">&nbsp;</label>
                                                </div>
                                            </td>
                                            <td><i className="fa fa-star text-warning"></i></td>
                                            <td className="user-name max-texts">
                                                <span className="mb-0 text-muted font-light">Ritesh</span>
                                            </td>
                                            <td>
                                                <a className="link" href="javascript: void(0)">

                                                    <span className="font-light text-dark">Something..</span>
                                                </a>
                                            </td>
                                            <td><i className="fa fa-paperclip text-muted"></i></td>
                                            <td className="text-muted font-light">May 13</td>
                                        </tr>
                                        <tr className="">
                                            <td className="pl-3">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="cst4"/>
                                                    <label className="custom-control-label"
                                                           htmlFor="cst4">&nbsp;</label>
                                                </div>
                                            </td>
                                            <td><i className="fa fa-star"></i></td>
                                            <td>
                                                <span className="mb-0 text-muted font-light">Kumar</span>
                                            </td>
                                            <td>
                                                <a className="link" href="javascript: void(0)">
                                                   <span
                                                    className="font-light text-dark">Perspiciatis</span>
                                                </a>
                                            </td>
                                            <td><i className="fa fa-paperclip text-muted"></i></td>
                                            <td className="text-muted font-light">May 9</td>
                                        </tr>
                                        <tr className="">
                                            <td className="pl-3">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="cst5"/>
                                                    <label className="custom-control-label"
                                                           htmlFor="cst5">&nbsp;</label>
                                                </div>
                                            </td>
                                            <td><i className="fa fa-star"></i></td>
                                            <td>
                                                <span className="mb-0 text-muted font-light">John Abraham</span>
                                            </td>
                                            <td>
                                                <a className="link" href="javascript: void(0)">

                                                    <span className="font-light text-dark">Lorem</span>
                                                </a>
                                            </td>
                                            <td><i className="fa fa-paperclip text-muted"></i></td>
                                            <td className="text-muted font-light">Feburary 10</td>
                                        </tr>
                                        <tr className="">
                                            <td className="pl-3">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="cst6"/>
                                                    <label className="custom-control-label"
                                                           htmlFor="cst6">&nbsp;</label>
                                                </div>
                                            </td>
                                            <td><i className="fa fa-star text-warning"></i></td>
                                            <td>
                                                <span className="mb-0 text-muted font-light">Akshay</span>
                                            </td>
                                            <td>
                                                <a className="link" href="javascript: void(0)">

                                                    <span className="font-light text-dark">ipsum</span>
                                                </a>
                                            </td>
                                            <td><i className="fa fa-paperclip text-muted"></i></td>
                                            <td className="text-muted font-light">December 09</td>
                                        </tr>
                                        <tr className="">
                                            <td className="pl-3">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="cst7"/>
                                                    <label className="custom-control-label"
                                                           htmlFor="cst7">&nbsp;</label>
                                                </div>
                                            </td>
                                            <td><i className="fa fa-star text-warning"></i></td>
                                            <td>
                                                <span className="mb-0 text-muted font-light">Hanna</span>
                                            </td>
                                            <td>
                                                <a className="link" href="javascript: void(0)">
                                                <span
                                                    className="font-light text-dark"> Unde</span>
                                                </a>
                                            </td>
                                            <td><i className="fa fa-paperclip text-muted"></i></td>
                                            <td className="text-muted font-light">Mar 09</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}

export default Tutor;