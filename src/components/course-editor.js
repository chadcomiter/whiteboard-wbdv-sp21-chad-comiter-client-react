import React from 'react'


const CourseEditor = ({props}) =>
<div class="container">
<h1>Course Editor</h1>

<i onClick={() => props.history.goBack()}className="fas fa-arrow-left fa-2x float-left"></i>

<div class="row">
    <div class="col-4">
        <ul class="list-group">
            <li class="list-group-item">
                Cras justo odio
                <i class="fas fa-trash float-right"></i>
            </li>
            <li class="list-group-item active">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
            <li class="list-group-item">
                <i class="fas fa-plus-circle"></i>
            </li>
        </ul>
    </div>
    <div class="col-8">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                    Active
                    <i class="fas fa-trash"></i>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
                    <i class="fas fa-plus-circle"></i>
                </a>
            </li>
        </ul>

        <br/>

        <ul class="nav nav-pills">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
        </ul>

        Content intentionally left blank
    </div>
</div>
</div>

export default CourseEditor