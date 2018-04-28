'use strict';

$(document).ready(() => {
    $('.btn-action').each((i, btn) => {
        $(btn).click(() => {
            const action = $(btn).data('action');
            const password = prompt('Password ?');

            $.post(`command/${action}`, {password:password}, onResult)
        })
    });
});

function onResult(data) {
    if (data.error){
        alert(data.msg);
    }
}