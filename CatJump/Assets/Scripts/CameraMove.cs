using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraMove : MonoBehaviour
{
    private GameObject target;
    public float speed = 100f;
    void Start()
    {
        target = FindObjectOfType<Player>().gameObject;
    }

    // Update is called once per frame
    void Update()
    {
        if (gameObject.transform.position.y <= target.transform.position.y)
        {
            Vector3 newPos = new Vector3(gameObject.transform.position.x,
                target.transform.position.y,
                gameObject.transform.position.z);
            gameObject.transform.position = Vector3.Lerp(transform.position,
                newPos, speed);
        }
    }
}
