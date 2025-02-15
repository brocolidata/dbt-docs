'use strict';

const angular = require('angular');
const dag_utils = require('./dag_utils')
require("./styles.css");

angular
.module('dbt')
.controller('ExposureCtrl', ['$scope', '$state', 'project', 'code', '$anchorScroll', '$location',
            function($scope, $state, projectService, codeService, $anchorScroll, $location) {

    $scope.model_uid = $state.params.unique_id;
    $scope.project = projectService;

    $scope.codeService = codeService;
    $scope.extra_table_fields = [];
    $scope.versions = {};

    $scope.exposure = {};
    projectService.ready(function(project) {
        let exposure = project.nodes[$scope.model_uid];
        $scope.exposure = exposure;
        $scope.parents = dag_utils.getParents(project, exposure);
        $scope.parentsLength = $scope.parents.length;
        $scope.language = exposure.language;

        $scope.extra_table_fields = [
            {
                name: "Maturité",
                value: $scope.exposure.maturity,
            },
            {
                name: "Responsable",
                value: $scope.exposure.owner.name,
            },
            {
                name: "Contact",
                value: $scope.exposure.owner.email,
            },
            {
                name: "Exposure name",
                value: $scope.exposure.name,
            },
        ]
    })
}]);
