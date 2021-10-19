module.exports = function (sequelize, DataTypes) {
    const LookAlike = sequelize.define("LookAlike", {
        caption: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        url1: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        url2: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    });

    return LookAlike;
};
