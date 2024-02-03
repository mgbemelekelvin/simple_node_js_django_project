import requests


def call_service(url, method='get'):
    try:
        response = None
        if method.lower() == 'get':
            response = requests.get(url)
            # We would add other HTTP methods if needed (e.g., POST, PUT, DELETE)
        else:
            # Handle other HTTP methods as required
            pass

        return response.status_code, response.json() if response else None

    except Exception as e:
        print(e)
        return 500, None
