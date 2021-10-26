
function task21(arr) {
    return arr
        .map((item) => {
            return {
                year: item.year,
                month: item.month
            };
        })
        .reduce((acc, item) => {
            const payment = acc.find((ellement) => {
                return ellement.month === item.month;
            });

            if (!payment) {
                item.Opscount = 1
                acc.push(item);
            } else {
                payment.Opscount++;
            }

            return acc
                .sort((prev, next) => {
                    return next.Opscount - prev.Opscount
                });
        }, [])
        .slice(0, 3);
}

function task22(year, month, arr) {
    const current = arr
    .reduce((acc, item) => {
        if (item.year != year || item.month != month) {
            return acc;
        };

        switch (item.type) {
            case "payment": acc.paymentSum += item.amount;
            break;
            case "withdrawal": acc.monthWithdrawal += item.amount;
            break;
            default: acc.replenishmentSum += item.amount;
        };

        acc.monthBalance = acc.replenishmentSum - acc.monthWithdrawal - acc.paymentSum;
        acc.withdrawalRate = acc.monthWithdrawal / acc.replenishmentSum;

        if (acc.withdrawalRate < .15) {
            acc.rank = "Золотой";
        } else if (acc.withdrawalRate < .3) {
            acc.rank = "Серебряный";
        } else {
            acc.rank = "Бронзовый";
        }

        return acc;
    },{paymentSum: 0, monthWithdrawal: 0, replenishmentSum: 0});

        return {
            monthBalance: current.monthBalance,
            monthWithrawal: current.monthWithdrawal, 
            withdrawalRate: current.withdrawalRate, 
            rank: current.rank,
        }
}

function task23(arr) {
    return arr;
}