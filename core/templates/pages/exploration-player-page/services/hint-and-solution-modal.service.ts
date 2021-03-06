// Copyright 2014 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Service for showing the hint and solution modals.
 */

require(
  'components/common-layout-directives/common-elements/' +
  'confirm-or-cancel-modal.controller.ts');
require(
  'pages/exploration-player-page/templates/display-hint-modal.controller.ts');
require(
  'pages/exploration-player-page/templates/' +
  'display-solution-modal.controller.ts');

require(
  'pages/exploration-player-page/services/' +
  'audio-translation-manager.service.ts');
require(
  'pages/exploration-player-page/services/' +
  'hints-and-solution-manager.service.ts');
require('pages/exploration-player-page/services/player-position.service.ts');
require('pages/exploration-player-page/services/player-transcript.service.ts');
require('services/audio-player.service.ts');
require('services/autogenerated-audio-player.service.ts');

require(
  'pages/exploration-player-page/exploration-player-page.constants.ajs.ts');

angular.module('oppia').factory('HintAndSolutionModalService', [
  '$uibModal', function($uibModal) {
    return {
      displayHintModal: function(index) {
        return $uibModal.open({
          template: require(
            'pages/exploration-player-page/templates/' +
            'hint-and-solution-modal.template.html'),
          backdrop: 'static',
          resolve: {
            index: () => index
          },
          controller: 'DisplayHintModalController'
        });
      },
      displaySolutionModal: function() {
        return $uibModal.open({
          template: require(
            'pages/exploration-player-page/templates/' +
            'hint-and-solution-modal.template.html'),
          backdrop: 'static',
          controller: 'DisplaySolutionModalController'
        });
      },
      displaySolutionInterstitialModal: function() {
        return $uibModal.open({
          template: require(
            'pages/exploration-player-page/templates/' +
            'solution-interstitial-modal.template.html'),
          backdrop: 'static',
          controller: 'ConfirmOrCancelModalController'
        });
      }
    };
  }
]);
