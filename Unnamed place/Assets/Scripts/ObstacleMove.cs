using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ObstacleMove : MonoBehaviour
{
    // Start is called before the first frame update
    [SerializeField] float speed = 0.06f;
    // Update is called once per frame
    void Update()
    {
        transform.Translate(Vector2.left * speed);
        if (transform.position.x < -15f)
        {
            Destroy(gameObject);
        }
    }
}
