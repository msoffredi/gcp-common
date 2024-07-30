export class ValidationHelper {
    /**
     * Use example:
     *
     * if (!ValidationHelper.checkEnvVar('TABLE_NAME')) {
     *     exit(1)
     * }
     *
     * @param envVar Environment variable to validate such as TABLE_NAME
     * @returns True if environment variable is defined, false otherwise
     */
    public static checkEnvVar = (envVar: string): boolean => {
        if (!process.env[envVar]) {
            console.error(`${envVar} not defined as environment variable`);
            return false;
        }

        return true;
    };
}
